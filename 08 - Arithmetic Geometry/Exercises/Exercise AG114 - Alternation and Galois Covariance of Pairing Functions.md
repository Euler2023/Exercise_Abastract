---
title: "Exercise AG114: Alternation and Galois Covariance of Pairing Functions"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.4, Exercise 7.4.1, printed p. 282, PDF p. 295"
source_refs:
  - "S7/ch-7/sec-4/ex-1"
created: 2026-10-28
---

# Exercise AG114: Alternation and Galois Covariance of Pairing Functions

## Problem Statement

> [!question] Original Exercise 7.4.1
> (a) Show that an alternating bilinear form is skew symmetric.
>
> (b) Let $\sigma\in\operatorname{Gal}(\bar k/k)$. Explain why $f_{Q^\sigma}=f_Q^\sigma$ and $g_{Q^\sigma}=g_Q^\sigma$.

> **Context and notation.** For $Q\in E[N]$, the source chooses $f_Q,g_Q\in\bar k(E)$ with $\operatorname{div}(f_Q)=N(Q)-N(0_E)$ and $f_Q\circ[N]=g_Q^N$, and defines $e_N(P,Q)=g_Q(X+P)/g_Q(X)$ for an auxiliary generic point $X$.

> [!warning] Source issue
> The functions are not unique. The literal equalities in (b) presuppose compatible choices or normalizations. With arbitrary choices only equality up to nonzero constants follows; those constants cancel in the Weil pairing. The solution makes this choice dependence explicit.

## Hints

> [!hint]- Hint 1
> Expand the alternating expression at $u+v$.

> [!hint]- Hint 2
> Conjugate the divisors defining $f_Q$ and $g_Q$ and track the scalar freedom.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** In additive notation, alternation means $B(v,v)=0$. Bilinearity yields
> $$
> 0=B(u+v,u+v)=B(u,v)+B(v,u),
> $$
> so $B(v,u)=-B(u,v)$. No division by $2$ is used. For the multiplicative Weil pairing this reads $1=e(u,v)e(v,u)$, hence $e(v,u)=e(u,v)^{-1}$.
>
> **(b)** Galois conjugation commutes with the group law, because the curve and its addition formulas are defined over $k$. It also carries the order of a rational function at $P$ to its order at $P^\sigma$. Hence
> $$
> \operatorname{div}(f_Q^\sigma)=N(Q^\sigma)-N(0_E).
> $$
> Choose $Q'$ with $[N]Q'=Q$. The divisor of the auxiliary $g_Q$ is
> $$
> D_Q=\sum_{T\in E[N]}(Q'+T)-(T).
> $$
> This does not depend on the chosen division point, because a different $Q'$ differs by an $N$-torsion translation. Conjugation permutes $E[N]$ and takes $Q'$ to a division point of $Q^\sigma$, giving $D_Q^\sigma=D_{Q^\sigma}$. Thus $g_Q^\sigma$ is a valid auxiliary function for $Q^\sigma$.
>
> Two functions with the same divisor on a projective integral curve differ by a nonzero constant. Consequently arbitrary choices give
> $$
> f_{Q^\sigma}=a_{\sigma,Q}f_Q^\sigma,\qquad
> g_{Q^\sigma}=b_{\sigma,Q}g_Q^\sigma
> $$
> for nonzero constants. The printed equalities are obtained by using the conjugated functions as the compatible choices. They may also be enforced simultaneously by normalizing their leading Laurent coefficients in a parameter at $0_E$ defined over $k$; for $Q\ne0$ the pole orders there are $N$ and $1$, and for $Q=0$ choose the constants $1$. The relation $f_Q\circ[N]=g_Q^N$ can be restored by a scalar normalization depending only on the leading term of $[N]$ at the origin. All these choices leave the pairing unchanged.
>
> Indeed the scalar multiplying $g_Q$ cancels in $g_Q(X+P)/g_Q(X)$. Thus, independently of normalization,
> $$
> e_N(P^\sigma,Q^\sigma)=e_N(P,Q)^\sigma.
> $$
> This is the intrinsic covariance for which the source uses the auxiliary equalities.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 282 / PDF p. 295. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
