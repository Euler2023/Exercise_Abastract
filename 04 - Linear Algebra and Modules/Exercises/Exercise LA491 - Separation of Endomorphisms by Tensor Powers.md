---
title: "Exercise LA491: Separation of Endomorphisms by Tensor Powers"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - tensor-powers
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 19, printed p. 726, PDF p. 741"
created: 2026-09-29
---

# Exercise LA491: Separation of Endomorphisms by Tensor Powers

## Problem Statement

> [!question] Lang XVIII.19
> Let $G$ be a finite set of endomorphisms of a finite-dimensional vector space $E$ over the field $k$. For each $\sigma\in G$, let $c_\sigma$ be an element of $k$. Show that if
>
> $$
> \sum_{\sigma\in G}c_\sigma T^r(\sigma)=0
> $$
>
> for all integers $r\ge1$, then $c_\sigma=0$ for all $\sigma\in G$. [Hint: Use the preceding exercise, and Proposition 7.2 of Chapter XVI.]

> [!info] The cited tensor identification
> Proposition XVI.7.2 states, for a finite free module $E$ over a commutative ring $R$, the graded algebra isomorphism
>
> $$
> T(\operatorname{End}_R(E))
> \longrightarrow \bigoplus_{r\ge0}\operatorname{End}_R(T^r(E)).
> $$
>
> In degree $r$ it sends $f_1\otimes\cdots\otimes f_r$ to the map applying $f_i$ in tensor factor $i$. Multiplication on the right combines maps by tensor product, not composition between different degrees. [S2, Ch. XVI, Proposition 7.2, printed p. 634, PDF p. 649.]

> [!warning] Source issue inherited from Exercise 18
> If $G$ contains the zero endomorphism, its coefficient cannot be detected by positive tensor powers: $T^r(0)=0$ for $r\ge1$. For $G=\{0\}$ and $c_0=1$, the printed conclusion is false. It is correct for $0\notin G$, or when the hypotheses also include degree zero, where $T^0(E)=k$ and $T^0(\sigma)=1_k$.

## Hints

> [!hint]- Hint 1: Choose a basis of the endomorphism space
> Treat the distinct operators $\sigma$ as degree-one elements of the free tensor algebra on $\operatorname{End}_k(E)$. Their algebra powers are $\sigma^{\otimes r}$.

> [!hint]- Hint 2: Transport the relations through the tensor identification
> The isomorphism in the cited proposition sends $\sigma^{\otimes r}$ to $T^r(\sigma)$. Apply the corrected Vandermonde argument in Exercise 18 to these degree-one elements.

## Solution

> [!success]- Independent derivation with the zero-operator boundary
> Put $V=\operatorname{End}_k(E)$. For each $r\ge1$, there is a linear map
>
> $$
> \Phi_r:V^{\otimes r}\longrightarrow\operatorname{End}_k(E^{\otimes r}),
> \qquad
> (f_1\otimes\cdots\otimes f_r)(v_1\otimes\cdots\otimes v_r)
> =f_1(v_1)\otimes\cdots\otimes f_r(v_r).
> $$
>
> It is well-defined by multilinearity. Choose a basis $e_1,\ldots,e_d$ of $E$, and the matrix-unit basis $E_{ij}$ of $V$. The tensor $E_{i_1j_1}\otimes\cdots\otimes E_{i_rj_r}$ maps to the matrix unit that sends $e_{j_1}\otimes\cdots\otimes e_{j_r}$ to $e_{i_1}\otimes\cdots\otimes e_{i_r}$ and annihilates the other basis vectors. Thus $\Phi_r$ maps a basis to a basis and is an isomorphism. For $r=0$, the map is the identity $k\to\operatorname{End}_k(k)$.
>
> Under this identification, the given equations are precisely
>
> $$
> \sum_{\sigma\in G}c_\sigma\,\sigma^{\otimes r}=0
> \quad\text{in }V^{\otimes r}.
> $$
>
> Choose a basis of $V$. Its tensor algebra is the free noncommutative polynomial algebra on that basis, because its degree-$r$ basis consists of all words of length $r$. The operators in $G$ are distinct degree-one elements in this algebra.
>
> If $0\notin G$ and $m=|G|$, apply the positive-power version of [[02 - Ring Theory/Exercises/Exercise R307 - Distinct Linear Forms and Power Relations|R307]] to the equations for $r=1,\ldots,m$. It gives $c_\sigma=0$ for every $\sigma$. Thus those finitely many degrees already suffice.
>
> If $0\in G$, first apply the same argument to the nonzero elements, omitting the zero term, to obtain $c_\sigma=0$ for $\sigma\ne0$. The degree-zero equation is $\sum_{\sigma\in G}c_\sigma=0$, and now yields $c_0=0$. Equivalently, use the version of R307 with exponents $0,\ldots,m-1$.
>
> If $E=0$, then $V=\{0\}$; the positive-degree claim fails for the singleton set as already stated. Degree zero still detects its coefficient. An empty set $G$ causes no assertion to check.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]

## Notes

- **Source and proof status:** The full exercise and hint were checked at [S2, Ch. XVIII, Exercise 19, printed p. 726, PDF p. 741]. The cited proposition was checked at [S2, Ch. XVI, Proposition 7.2, printed p. 634, PDF p. 649]. Its relevant degreewise identification is independently proved here by matrix units.
- **Meaning of tensor power:** $T^r(\sigma)=\sigma^{\otimes r}$ acts on $E^{\otimes r}$. It is not the compositional power $\sigma^r$ on $E$.
- **Finiteness and field:** Finite dimensionality supplies the endomorphism-tensor isomorphism. The coefficient-separation argument is valid in arbitrary characteristic and over finite fields.
