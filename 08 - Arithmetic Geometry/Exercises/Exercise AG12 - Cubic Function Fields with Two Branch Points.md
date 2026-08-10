---
title: "Exercise AG12: Cubic Function Fields with Two Branch Points"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - function-fields
  - monodromy
  - riemann-existence
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 9, Ex. 9.3, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise AG12: Cubic Function Fields with Two Branch Points

## Problem Statement

> [!question] Exercise
> **(a)** Determine the number of isomorphism classes of function fields $K$ of degree $3$ over $F=\mathbb C(t)$ that are ramified only at the points $1$ and $-1$.
>
> **(b)** Describe gluing data for the corresponding Riemann surfaces as pairs of permutations.
>
> **(c)** For each isomorphism class, find a polynomial $f(t,x)$ such that $K=F[t]/(f)$ represents the isomorphism class.

> [!warning] Source issue in part (c)
> The source prints $K=F[t]/(f)$. Since $F=\mathbb C(t)$ and $f(t,x)$ is a polynomial in the extension variable $x$, the intended quotient is $K=F[x]/(f)$, consistently with Proposition 15.9.5 in the same section. The printed statement is preserved above, while the corrected notation is used in the solution.

## Hints

> [!hint]- Hint 1
> For part (a), classify ordered pairs $(\sigma_1,\sigma_{-1})\in S_3^2$ that generate a transitive subgroup, modulo simultaneous conjugation. The resulting seven classes are the input for parts (b) and (c).

> [!hint]- Hint 2
> For part (b), choose one gluing-data representative for every class obtained in part (a). First separate the possibilities according to the cycle types of the two permutations. Remember that “ramified only at” allows one of the displayed permutations to be the identity.

> [!hint]- Hint 3
> For part (c), realize the representatives from part (b) in the same order. Use $x^3-a(t)$ for pairs of $3$-cycles, $x^3-3x+2t$ for two transpositions, and the model $x^3-3ux-4u$ for a mixed pair.

## Solution

> [!success]- Solution
> Throughout, the ordered gluing pair is
> $$
> (\sigma_1,\sigma_{-1}),
> $$
> and both permutations refer to one common numbering of the three sheets.
>
> The three parts form one progressive argument: part (a) classifies the possible fields, part (b) records a gluing-data representative for each class, and part (c) constructs a polynomial realizing each representative. The labels $C_1,\ldots,C_7$ introduced in part (b) are retained in part (c).
>
> **(a) Number of isomorphism classes.**
>
> By the Riemann Existence Theorem, isomorphism classes are represented by ordered pairs $(\sigma_1,\sigma_{-1})\in S_3^2$, modulo simultaneous conjugation, for which $\langle\sigma_1,\sigma_{-1}\rangle$ acts transitively on $\{1,2,3\}$. There are four disjoint cases:
>
> 1. One permutation is the identity. The other must be a $3$-cycle: two classes, according to which point is the true branch point.
> 2. Both are transpositions. They must be distinct, and all ordered pairs of distinct transpositions are simultaneously conjugate: one class.
> 3. One is a transposition and the other a $3$-cycle: two classes, according to which point carries the $3$-cycle.
> 4. Both are $3$-cycles: two classes, according as they are equal or inverse.
>
> Hence the number of isomorphism classes is
> $$
> 2+1+2+2=7.
> $$
> Here “ramified only at $1$ and $-1$” is read in the sense used in this section: the set of true finite branch points is contained in $\{1,-1\}$. If both displayed points are required to be true branch points, the two classes containing an identity are omitted and the answer becomes $5$.
>
> **(b) Gluing data.**
>
> Put $c=(123)$, $c^{-1}=(132)$, $\tau=(12)$, and $\upsilon=(23)$. Label the seven classes found in part (a) by the following gluing-data representatives:
>
> 1. $C_1$: $(c,1)$;
> 2. $C_2$: $(1,c)$;
> 3. $C_3$: $(\tau,\upsilon)$;
> 4. $C_4$: $(c,\tau)$;
> 5. $C_5$: $(\tau,c)$;
> 6. $C_6$: $(c,c)$;
> 7. $C_7$: $(c,c^{-1})$.
>
> Any simultaneous conjugate of one of these pairs describes the same covering. The list is exhaustive by the four cycle-type cases in part (a). Notice that no relation $\sigma_1\sigma_{-1}=1$ is imposed: Artin's base $T$ here is the affine $t$-plane, and a large loop in $T$ may have nontrivial monodromy, equivalently monodromy at the point at infinity after compactification.
>
> **(c) Polynomial representatives.**
>
> We now realize, in the same order, the seven classes and gluing pairs from parts (a) and (b):
>
> 1. For $C_1$, represented by $(c,1)$, take
>    $$
>    f_1(t,x)=x^3-(t-1).
>    $$
>    The point $t=1$ has a triple root, while $t=-1$ is unramified.
>
> 2. For $C_2$, represented by $(1,c)$, take
>    $$
>    f_2(t,x)=x^3-(t+1).
>    $$
>    The point $t=-1$ has a triple root, while $t=1$ is unramified.
>
> 3. For $C_3$, represented by $(\tau,\upsilon)$, take
>    $$
>    f_3(t,x)=x^3-3x+2t.
>    $$
>    Since $(f_3)_x=3(x^2-1)$, its critical values are $t=1$ and $t=-1$. Each corresponding fibre has one double root, so both local permutations are transpositions. Moreover, the curve is parametrized by $x$ through $t=(3x-x^3)/2$; hence its function field is $\mathbb C(x)$ of degree $3$ over $\mathbb C(t)$, so the covering is connected and the two transpositions must be distinct.
>
> 4. For $C_4$, represented by $(c,\tau)$, take
>    $$
>    f_4(t,x)=x^3-6(1-t)x-8(1-t).
>    $$
>    This is $x^3-3ux-4u$ with $u=2(1-t)$. The point $u=0$, hence $t=1$, gives a $3$-cycle, while $u=4$, hence $t=-1$, gives a transposition.
>
> 5. For $C_5$, represented by $(\tau,c)$, take
>    $$
>    f_5(t,x)=x^3-6(t+1)x-8(t+1).
>    $$
>    Here $u=2(t+1)$, so $t=1$ gives the transposition and $t=-1$ gives the $3$-cycle.
>
> 6. For $C_6$, represented by $(c,c)$, take
>    $$
>    f_6(t,x)=x^3-(t^2-1).
>    $$
>    The function $t^2-1$ has a simple zero at both $1$ and $-1$. A positive loop around either zero multiplies a chosen cube root by the same primitive cube root of unity.
>
> 7. For $C_7$, represented by $(c,c^{-1})$, take
>    $$
>    f_7(t,x)=(t+1)x^3-(t-1).
>    $$
>    Equivalently, $x^3=(t-1)/(t+1)$. The rational function on the right has valuation $1$ at $t=1$ and valuation $-1$ at $t=-1$, so the two local $3$-cycles are inverse.
>
> Each pair above acts transitively, so the associated covering is connected and the corresponding polynomial is irreducible over $F=\mathbb C(t)$. Thus
> $$
> K_i=F[x]/(f_i)\cong F(x_i),
> $$
> where $x_i$ is a root of $f_i(t,x)$. This is a degree-$3$ field extension representing the required isomorphism class.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

Level: A1-A2; domain: function fields, branched coverings, and permutation monodromy. Prerequisites are the Riemann Existence Theorem, simultaneous conjugacy in $S_3$, and the transitivity criterion for connected coverings. The principal source is S1, Chapter 15, Section 9.

The classification imports S1 Theorem 15.9.4 (Riemann Existence), printed p. 465, PDF p. 477, which S1 states without proof, together with Lemmas 15.9.10 and 15.9.11, printed p. 467, PDF p. 479. The enumeration of simultaneous-conjugacy classes and all polynomial representatives are independent derivations. Part (c) reproduces the printed notation $K=F[t]/(f)$ verbatim and visibly records the correction to $K=F[x]/(f)$; this is confirmed by Proposition 15.9.5, printed p. 465, PDF p. 477. The exact exercise statement was visually checked at printed p. 475, PDF p. 487.
