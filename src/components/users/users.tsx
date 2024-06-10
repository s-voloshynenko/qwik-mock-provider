import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import styles from './users.scss?inline';
import { useUsers } from '~/use/use-users';

export default component$(() => {
  const usersState = useUsers();
  const nav = useNavigate();

  useStylesScoped$(styles);

  return (
    <div class="users">
      <div class="users-title">
        List of users:
      </div>
      <ul class="users-list">
        {
          usersState.users.map((user) =>
            <li id={`user-${user.id}`} class="users-item" key={user.id} onClick$={() => {
              nav(`/users/${user.id}/`);
            }}>
              {user.name} (ID: {user.id})
            </li>
          )
        }
      </ul>
    </div>
  );
});
