export type RootStackParamList = {
  registration: undefined;
  login: undefined;
  home: undefined;
  drawer: undefined;
  theme : undefined;
  chat: {
    userId: string | null;
    sentToUid: string;
  };
};

export type HomeDrawerParamList = {
  home: undefined;
  theme: undefined;   
  userScreen: undefined;
};