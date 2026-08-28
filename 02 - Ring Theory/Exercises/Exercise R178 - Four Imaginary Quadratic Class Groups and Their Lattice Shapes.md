---
title: "Exercise R178: Four Imaginary Quadratic Class Groups and Their Lattice Shapes"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - class-groups
  - ideal-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 8, Computing the Class Group, Ex. 8.5, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R178: Four Imaginary Quadratic Class Groups and Their Lattice Shapes

## Problem Statement

> [!question] Exercise 8.5
> Determine the class group and draw the possible shapes of the lattices in each case:
>
> **(a)** $d=-10$, **(b)** $d=-13$, **(c)** $d=-14$, **(d)** $d=-21$.

## Hints

> [!hint]- Hint 1
> Use the Section 13.8 bound to list the small rational primes that can generate the class group, and then test whether each prime is inert, split, or ramified.

> [!hint]- Hint 2
> For $d=-14$, use $N(2+\delta)=18$. For $d=-21$, use $N(3+\delta)=30$.

## Solution

> [!success]- Solution
> Write $R=\mathbb Z[\delta]$, where $\delta^2=d$.
>
> **(a) $d=-10$.** Only $2$ and $3$ lie below the class-group bound. The prime $2$ ramifies as $(2)=P^2$, where $P=(2,\delta)$, while $3$ remains prime. The class $[P]$ is nontrivial and has order two. Therefore
>
> $$
> \operatorname{Cl}(R)\cong C_2,
> $$
>
> with lattice shapes represented by $R$ and $P$.
>
> **(b) $d=-13$.** Again only $2$ and $3$ must be inspected. Here $(2)=P^2$ with $P=(2,1+\delta)$, and $3$ remains prime. Thus
>
> $$
> \operatorname{Cl}(R)\cong C_2,
> $$
>
> represented by $R$ and $P$.
>
> **(c) $d=-14$.** The prime $2$ ramifies, with $P=(2,\delta)$, and $3$ splits. Choose $Q=(3,1+\delta)$. Since
>
> $$
> N(2+\delta)=18=2\cdot3^2,
> $$
>
> direct divisibility gives $(2+\delta)=P\overline Q^{,2}$ and hence $[P]=[Q]^2$. The class $[P]$ is nontrivial, while $Q$ is not principal because $a^2+14b^2=3$ has no solution. Consequently $[Q]$ has order four and
>
> $$
> \operatorname{Cl}(R)\cong C_4,
> $$
>
> represented by $R,Q,P,\overline Q$.
>
> **(d) $d=-21$.** The primes $2$ and $3$ ramify:
>
> $$
> P=(2,1+\delta),\qquad Q=(3,\delta),
> $$
>
> and $5$ splits; take $S=(5,2+\delta)$. The classes $[P]$ and $[Q]$ both have order two. Neither $P$, $Q$, nor $PQ$ is principal, because the equations
>
> $$
> a^2+21b^2=2,\qquad a^2+21b^2=3,\qquad a^2+21b^2=6
> $$
>
> have no integer solutions. Moreover $N(3+\delta)=30$ gives $[S]=[P][Q]$ up to replacing $S$ by its conjugate, which has the same order-two class. Hence
>
> $$
> \operatorname{Cl}(R)\cong C_2\times C_2,
> $$
>
> represented by $R,P,Q,S$.
>
> The following diagram displays normalized basis representatives for every shape. Scaling and rotation do not change a lattice's similarity class.
>
> ![[Attachments/artin-algebra-2e-ch13-ex-8.5-class-group-lattice-shapes.png]]

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Exercises/Exercise R156 - Ideal Lattice Shapes in Five Quadratic Orders|Ideal Lattice Shapes in Five Quadratic Orders]]

## Notes

- **Routing:** Ring Theory is primary because the drawings represent ideal classes obtained from prime-ideal arithmetic.
- **Source figure:** `artin-algebra-2e-ch13-ex-8.5-class-group-lattice-shapes.png` is an independent TikZ reconstruction for this exercise, not a crop from Artin. It records the source exercise at [S1, Ch. 13, §13.8, Ex. 8.5, printed p. 410, PDF p. 422].
- **Figure convention:** Each panel is independently rescaled for legibility; only the Euclidean shape within a panel is meaningful.
- **Source status:** The problem is from Artin; the class computations and diagram are independent derivations.
