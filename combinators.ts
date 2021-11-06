const I = <T>(x: T) => x

const K =
  <T>(x: T) =>
  <T>(y: T) =>
    x

const A =
  (f: <T>(x: T) => T) =>
  <T>(x: T) =>
    f(x)

const T =
  <T>(x: T) =>
  (f: <T>(x: T) => T) =>
    f(x)

const W =
  (f: <T>(x: T) => <G>(x: G) => G) =>
  <T>(x: T) =>
    f(x)(x)

const C =
  (f: <T>(x: T) => <G>(x: G) => G) =>
  <T>(y: T) =>
  <T>(x: T) =>
    f(x)(y)

const B =
  (f: <T>(x: T) => T) =>
  (g: <T>(x: T) => T) =>
  <T>(x: T) =>
    f(g(x))

const S =
  (f: <T>(x: T) => <G>(x: G) => G) =>
  <T>(g: <T>(x: T) => T) =>
  (x: T) =>
    f(x)(g(x))

const S_ =
  (f: <T>(x: T) => <G>(x: G) => G) =>
  (g: <T>(x: T) => T) =>
  <T>(x: T) =>
    f(g(x))(x)

const S2 =
  (f: <T>(x: T) => <G>(x: G) => G) =>
  (g: <T>(x: T) => T) =>
  (h: <T>(x: T) => T) =>
  <T>(x: T) =>
    f(g(x))(h(x))

const P =
  (f: <T>(x: T) => <G>(x: G) => G) =>
  (g: <T>(x: T) => T) =>
  <T>(x: T) =>
  <T>(y: T) =>
    f(g(x))(g(y))

export { S2, S_, A, B, C, I, K, P, S, T, W }
