import { useContextProvider, useStore } from '@builder.io/qwik';
import { UsersStore } from '~/interfaces/users';
import { UsersContext } from '~/routes/users/layout';

export const useMockUsers = (config: Partial<UsersStore>) => {
  const usersState = useStore({
    ...config
  });

  useContextProvider(UsersContext, usersState);
};
