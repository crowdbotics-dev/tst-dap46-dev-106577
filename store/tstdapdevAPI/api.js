import axios from "axios"
const tstdapdevAPI = axios.create({
  baseURL: "https://tst-dap46s-dev-106577.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstdapdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return tstdapdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tstdapdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_test3_list(payload) {
  return tstdapdevAPI.get(`/api/v1/test3/`)
}
function api_v1_test3_create(payload) {
  return tstdapdevAPI.post(`/api/v1/test3/`, payload)
}
function api_v1_test3_retrieve(payload) {
  return tstdapdevAPI.get(`/api/v1/test3/${payload.id}/`)
}
function api_v1_test3_update(payload) {
  return tstdapdevAPI.put(`/api/v1/test3/${payload.id}/`, payload)
}
function api_v1_test3_partial_update(payload) {
  return tstdapdevAPI.patch(`/api/v1/test3/${payload.id}/`, payload)
}
function api_v1_test3_destroy(payload) {
  return tstdapdevAPI.delete(`/api/v1/test3/${payload.id}/`)
}
function api_v1_yuio_list(payload) {
  return tstdapdevAPI.get(`/api/v1/yuio/`)
}
function api_v1_yuio_create(payload) {
  return tstdapdevAPI.post(`/api/v1/yuio/`, payload)
}
function api_v1_yuio_retrieve(payload) {
  return tstdapdevAPI.get(`/api/v1/yuio/${payload.id}/`)
}
function api_v1_yuio_update(payload) {
  return tstdapdevAPI.put(`/api/v1/yuio/${payload.id}/`, payload)
}
function api_v1_yuio_partial_update(payload) {
  return tstdapdevAPI.patch(`/api/v1/yuio/${payload.id}/`, payload)
}
function api_v1_yuio_destroy(payload) {
  return tstdapdevAPI.delete(`/api/v1/yuio/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstdapdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstdapdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tstdapdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstdapdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstdapdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_test3_list,
  api_v1_test3_create,
  api_v1_test3_retrieve,
  api_v1_test3_update,
  api_v1_test3_partial_update,
  api_v1_test3_destroy,
  api_v1_yuio_list,
  api_v1_yuio_create,
  api_v1_yuio_retrieve,
  api_v1_yuio_update,
  api_v1_yuio_partial_update,
  api_v1_yuio_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
