export const isAuthorized = (dataUser, role) => {
    return (dataUser && dataUser[process.env.AUTH0_NAMESPACE + '/roles'].includes(role));
  }

  
