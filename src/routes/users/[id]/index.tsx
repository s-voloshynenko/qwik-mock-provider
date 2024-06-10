import { component$, useComputed$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import User from '~/components/user/user';
import { useUsers } from '~/use/use-users';

export default component$(() => {
  const usersState = useUsers();
  const location = useLocation();

  const currentUser = useComputed$(() => {
    return usersState.users.find((user) => user.id.toString() === location.params.id);
  });

  return (
    <>
      <div class="container">
        <User id={currentUser.value!.id} name={currentUser.value!.name}/>
      </div>
    </>
  );
});
