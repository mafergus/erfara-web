const DEV_USER = {
 localId: "7hJGDkRieEfhPiMnu1HGDF8w59V2",
 email: "matthew.n.ferguson@gmail.com",
 emailVerified: true,
 displayName: "Matt Ferguson",
 providerUserInfo: [
  {
   "providerId": "google.com",
   "displayName": "Matthew Ferguson",
   "photoUrl": "https://lh3.googleusercontent.com/-UpdkX-Vzo0s/AAAAAAAAAAI/AAAAAAAABHE/MRLAwr1dpvI/photo.jpg",
   "federatedId": "108739554455518089977",
   "email": "matthew.n.ferguson@gmail.com",
   "rawId": "108739554455518089977"
  }
 ],
 photoUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/11009152_10105063465546270_5215382255678934863_n.jpg?oh=185a667a757d3d5f38824901c1c1d3ab&oe=5923891C",
 validSince: "1483611459",
 lastLoginAt: "1484440207000",
 createdAt: "1483611459000"
};

export function authedUserReducer(state = DEV_USER, action) {
  switch (action.type) {
    case "ADD_AUTHED_USER_SUCCESS": {
      return action.user;
    }
    case "SIGN_OUT_USER": {
      return {};
    }
    default:
      return state;
  }
}
