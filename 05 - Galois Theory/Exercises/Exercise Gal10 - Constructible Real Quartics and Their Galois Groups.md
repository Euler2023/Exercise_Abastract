---
title: "Exercise Gal10: Constructible Real Quartics and Their Galois Groups"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - constructibility
  - quartic-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.17, printed p. 509, PDF p. 521"
created: 2026-08-11
---

# Exercise Gal10: Constructible Real Quartics and Their Galois Groups

## Problem Statement

> [!question] Exercise 9.17
> Determine the real numbers $\alpha$ of degree $4$ over $\mathbb Q$ that can be constructed with ruler and compass, in terms of the Galois groups of their irreducible polynomials.

## Hints

> [!hint]- Hint 1
> A constructible number lies in a tower of quadratic extensions.

> [!hint]- Hint 2
> Pass to a finite Galois extension containing that tower and compare its Galois group with the splitting field of the irreducible polynomial of $\alpha$.

> [!hint]- Hint 3
> Among the transitive subgroups $S_4,A_4,D_4,C_4,D_2$, identify the $2$-groups.

## Solution

> [!success]- Solution
> Let $f$ be the irreducible polynomial of the real number $\alpha$ over $\mathbb Q$, let $K$ be its splitting field, and put
> $$
> G=\operatorname{Gal}(K/\mathbb Q).
> $$
> Since $\deg f=4$, the action of $G$ on the roots is transitive, and Artin's list gives
> $$
> G\in\{S_4,A_4,D_4,C_4,D_2\}.
> $$
>
> Suppose first that $\alpha$ is constructible. Then $\alpha$ lies in a tower
> $$
> \mathbb Q=E_0\subset E_1\subset\cdots\subset E_m,
> \qquad [E_j:E_{j-1}]=2.
> $$
> Such a tower is contained in a finite Galois extension $N/\mathbb Q$ of $2$-power degree. This follows inductively: if a Galois $2$-extension $N_{j-1}/\mathbb Q$ contains $E_{j-1}$ and $E_j=E_{j-1}(\sqrt{c_j})$, adjoin to $N_{j-1}$ the square roots of all $\mathbb Q$-conjugates of $c_j$. The resulting extension is Galois over $\mathbb Q$ and multiquadratic over $N_{j-1}$, so its degree is again a power of $2$.
>
> Since $N$ is normal and contains $\alpha$, it contains every conjugate of $\alpha$ and therefore contains $K$. Restriction gives a surjection
> $$
> \operatorname{Gal}(N/\mathbb Q)\twoheadrightarrow
> \operatorname{Gal}(K/\mathbb Q)=G.
> $$
> Thus $G$ is a quotient of a finite $2$-group and is itself a $2$-group.
>
> Conversely, suppose that $G$ is a $2$-group and let
> $$
> H=\operatorname{Gal}(K/\mathbb Q(\alpha)).
> $$
> Since $[G:H]=[\mathbb Q(\alpha):\mathbb Q]=4$, there is a maximal subgroup $J$ of $G$ containing $H$. Every maximal subgroup of a finite $2$-group has index $2$, so
> $$
> [G:J]=2,
> \qquad
> [J:H]=2.
> $$
> The corresponding fixed fields give a quadratic tower
> $$
> \mathbb Q=K^G\subset K^J\subset K^H=\mathbb Q(\alpha).
> $$
> Because $\alpha$ is real, this tower lies in $\mathbb R$. Hence $\alpha$ is constructible by ruler and compass.
>
> The $2$-groups in the transitive quartic list are
> $$
> D_4\quad(|D_4|=8),\qquad
> C_4,\qquad
> D_2\cong C_2\times C_2.
> $$
> The groups $S_4$ and $A_4$ have orders $24$ and $12$, respectively, and are not $2$-groups. Therefore
> $$
> \alpha\text{ is constructible}
> \iff
> \operatorname{Gal}(f/\mathbb Q)\cong D_4,C_4,\text{ or }D_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass Constructions]]
- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The exercise statement is source material from [S1, Ch. 16, §9, Ex. 9.17, printed p. 509, PDF p. 521]. The solution is an independent derivation using the standard constructibility criterion and Artin's transitive-subgroup list (16.9.1). The normal-closure step is essential: degree $4$ alone does not imply constructibility.
