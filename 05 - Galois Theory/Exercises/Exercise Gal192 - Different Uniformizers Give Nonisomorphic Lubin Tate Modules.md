---
title: 'Exercise Gal192: Different Uniformizers Give Nonisomorphic Lubin Tate Modules'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 5, printed p. 346, PDF p. 365
source_refs:
- S4/ch-V/sec-4/ex-5
created: '2026-10-23'
---

# Exercise Gal192: Different Uniformizers Give Nonisomorphic Lubin Tate Modules

## Problem Statement

> [!question] Neukirch V.4.5
> Two Lubin–Tate modules over the valuation ring $\mathfrak o_K$ of a local field $K$, but for different prime elements $\pi$ and $\bar\pi$, are never isomorphic.

## Hints

> [!hint]- Hint 1
> An isomorphism of formal $\mathfrak o_K$-modules identifies all division fields, since $(\pi^n)=(\bar\pi^n)$ as ideals.

> [!hint]- Hint 2
> The proved Lubin–Tate class-field description gives their norm groups as $\langle\pi\rangle U_K^{(n)}$ and $\langle\bar\pi\rangle U_K^{(n)}$. Let $n$ vary.

## Solution

> [!success]- Independent derivation
> The isomorphisms in question are formal $\mathfrak o_K$-module isomorphisms defined over $\mathfrak o_K$, as in Definition (4.4). Write $\bar\pi=u\pi$ with $u\in U_K$. Suppose $h:F\to G$ is such an isomorphism. It commutes with all scalars, so it identifies the kernels of $[\pi^n]$ on $F$ and $G$. Since $[u^n]$ is an invertible scalar map on $G$, the kernels of $[\pi^n]_G$ and $[\bar\pi^n]_G$ agree. Thus $h$ identifies the level-$n$ division points for $F$ at $\pi$ with those for $G$ at $\bar\pi$.
>
> The integral series $h$ and its inverse can be evaluated on these points, which have positive valuation. Their coefficients lie in $K$, so the two division fields are equal for every $n$. We now import the later proved, logically independent Corollary (5.6): the level-$n$ division field for uniformizer $\pi$ is the class field of
> $$
> \langle\pi\rangle\times U_K^{(n)}.
> $$
> This corollary does not assume the present nonisomorphism exercise. Equality of the fields implies equality of their norm subgroups, giving
> $$
> \langle\pi\rangle U_K^{(n)}=\langle\bar\pi\rangle U_K^{(n)}\quad(n\ge1).
> $$
> In particular $\bar\pi=\pi^k v$ with $v\in U_K^{(n)}$. Normalized valuations force $k=1$. Hence $u=\bar\pi/\pi\in U_K^{(n)}$ for every $n$. Since $\bigcap_n(1+\mathfrak p_K^n)=\{1\}$ in a discretely valued field, $u=1$ and $\bar\pi=\pi$, a contradiction.
>
> The field-of-definition restriction matters: the next exercise proves that an isomorphism exists over the completed maximal unramified extension. The present result does not prohibit those isomorphisms.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The entire exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 5, printed p. 346, PDF p. 365]. The formal-module isomorphism convention was checked at [printed p. 343, PDF p. 362]; Corollary (5.6) and its norm-subgroup proof at [printed p. 350, PDF p. 369].
- **Proof boundary:** This independent contradiction proof deliberately uses the later proved division-field/class-field description, not the desired nonisomorphism conclusion as an imported theorem. All applications and the limiting unit argument are given explicitly.
