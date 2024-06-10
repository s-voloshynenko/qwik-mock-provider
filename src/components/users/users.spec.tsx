import { expect, test, vi } from 'vitest';
import { createDOM } from '@builder.io/qwik/testing';
import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { $, Slot, component$ } from '@builder.io/qwik';

import Users from './users';

import { useMockUsers } from 'test-helpers/hooks/use-mock-users';

const goto = vi.fn(async () => {});

test('should represent users', async () => {
  const userMock = {
    id: 1,
    name: 'Test 1'
  };

  const { screen, render } = await createDOM();

  const TestWrap = component$(() => {
    useMockUsers({
      users: [
        {
          ...userMock
        }
      ]
    })
    return <Slot/>
  });

  await render(
    <QwikCityMockProvider>
      <TestWrap>
        <Users/>
      </TestWrap>
    </QwikCityMockProvider>
  );

  const users = screen.querySelector('.users') as HTMLElement;

  expect(users.innerHTML).toContain('users-item');
  expect(users.innerHTML).toContain(userMock.name);
});

test('should navigate to user\'s details page', async () => {
  const goto$ = $(goto);
  const url = 'http://localhost:5173/users/';
  const userMock = {
    id: 1,
    name: 'Test 1'
  };

  const { userEvent, render } = await createDOM();

  const TestWrap = component$(() => {
    useMockUsers({
      users: [
        {
          ...userMock
        }
      ]
    })
    return <Slot/>
  });

  await render(
    <QwikCityMockProvider url={url} goto={goto$}>
      <TestWrap>
        <Users/>
      </TestWrap>
    </QwikCityMockProvider>
  );

  await userEvent(`#user-${userMock.id}`, 'click');

  expect(goto).toHaveBeenCalledWith(`/users/${userMock.id}/`);
});
