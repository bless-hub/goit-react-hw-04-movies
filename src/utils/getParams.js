import queryString from "query-string";

export default function getParams(string) {
  return queryString.parse(string);
}
