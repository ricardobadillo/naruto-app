export interface AuthResponse {
    ok:         boolean;
    uid?:       string;
    username?:  string;
    email?:     string;
    token?:     string;
    message?:   string;
};
