---
title: "Exercise Gal4: Quartic Galois Groups from Real Roots and Discriminant"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - quartic-polynomials
  - discriminant
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.10, printed p. 509, PDF p. 521"
created: 2026-08-10
---

# Exercise Gal4: Quartic Galois Groups from Real Roots and Discriminant

## Problem Statement

> [!question] Exercise 9.10
> (a) What are the possible Galois groups of an irreducible quartic polynomial over $\mathbb Q$ that has exactly two real roots?
>
> (b) What are the possible Galois groups over $\mathbb Q$ of an irreducible quartic polynomial $f(x)$ whose discriminant is negative?

## Hints

> [!hint]- Hint 1
> Regard complex conjugation as a permutation of the four roots.

> [!hint]- Hint 2
> An irreducible quartic has Galois group one of $S_4,A_4,D_4,C_4,D_2$. Determine which of these transitive subgroups contains a transposition.

> [!hint]- Hint 3
> For a real separable polynomial, the sign of the discriminant is $(-1)^s$, where $s$ is the number of nonreal conjugate pairs.

## Solution

> [!success]- Solution
> Let $K$ be the splitting field and let $G=\operatorname{Gal}(K/\mathbb Q)$ act on the four roots. Irreducibility makes this action transitive, so Artin's list gives
> $$
> G\in\{S_4,A_4,D_4,C_4,D_2\},
> $$
> where $D_2$ denotes the transitive Klein four group and $|D_4|=8$.
>
> If $f$ has exactly two real roots, its other two roots form one nonreal conjugate pair. Complex conjugation fixes the two real roots and exchanges the nonreal pair, so its permutation on the roots is a transposition. Among the five transitive subgroups above, exactly $S_4$ and $D_4$ contain transpositions. Therefore
> $$
> G\cong S_4\text{ or }D_4.
> $$
>
> For part (b), let the nonreal roots occur in $s$ conjugate pairs. The factors in
> $$
> \operatorname{disc}(f)=\prod_{i<j}(\alpha_i-\alpha_j)^2
> $$
> show that
> $$
> \operatorname{sgn}(\operatorname{disc}(f))=(-1)^s.
> $$
> For a quartic, $s$ can be $0,1,$ or $2$. A negative discriminant therefore forces $s=1$, which is equivalent to having exactly two real roots. Hence the answer to part (b) is again
> $$
> G\cong S_4\text{ or }D_4.
> $$
>
> Both possibilities occur. The polynomial $x^4-2$ has two real roots and Galois group $D_4$. The polynomial $x^4-x-1$ has two real roots, is irreducible modulo $2$, has discriminant $-283$, and has irreducible resolvent $y^3+4y-1$; hence its Galois group is $S_4$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]

## Notes

The transitive-subgroup list and discriminant criterion are proved in Artin §16.9 [S1, printed pp. 493–496, PDF pp. 505–508]. The exercise solution and the two existence examples are independent derivations. The phrase “possible Galois groups” is interpreted up to abstract isomorphism with the indicated transitive actions on the roots.
