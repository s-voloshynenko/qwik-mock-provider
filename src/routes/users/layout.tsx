import { Slot, component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { type UsersStore } from '~/interfaces/users';

export const UsersContext = createContextId<UsersStore>('root.users');

export default component$(() => {
  const usersStore = useStore({
    users: [
      {
        id: 1,
        name: 'Test 1'
      },
      {
        id: 2,
        name: 'Test 2'
      },
    ],
  });

  useContextProvider(UsersContext, usersStore);

  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
