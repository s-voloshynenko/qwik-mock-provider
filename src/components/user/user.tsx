import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';

import styles from './user.scss?inline';

interface UserProps {
  id: number;
  name: string;
}

export default component$<UserProps>(({ id, name }) => {
  const isLoading = useSignal(false);

  useStylesScoped$(styles);

  return (
    <div class="user">
      <div class="user-headings">
        ID: {id} <br/>
        Name: {name}
      </div>
      <div class="user-load">
        <button onClick$={() => { isLoading.value = !isLoading.value }}>
          {
            isLoading.value ?
            'Loading...' : 'Press to load more data'
          }
        </button>
      </div>
    </div>
  );
});
