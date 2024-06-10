import { component$ } from '@builder.io/qwik';

import Users from '~/components/users/users';

export default component$(() => {
  return (
    <>
      <div class="container">
        <Users/>
      </div>
    </>
  );
});
