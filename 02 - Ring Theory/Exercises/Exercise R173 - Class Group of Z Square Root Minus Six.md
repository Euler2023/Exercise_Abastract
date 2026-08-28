---
title: "Exercise R173: Class Group of Z[sqrt(-6)]"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - class-groups
  - prime-ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 7, Ideal Classes, Ex. 7.4, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R173: Class Group of Z[sqrt(-6)]

## Problem Statement

> [!question] Exercise 7.4
> Let $R=\mathbb Z[\delta]$, where $\delta^2=-6$.
>
> **(a)** Prove that the lattices $P=(2,\delta)$ and $Q=(3,\delta)$ are prime ideals of $R$.
>
> **(b)** Factor the principal ideal $(6)$ into prime ideals explicitly in $R$.
>
> **(c)** Determine the class group of $R$.

## Hints

> [!hint]- Hint 1
> Identify $R/P$ and $R/Q$ with $\mathbb F_2$ and $\mathbb F_3$.

> [!hint]- Hint 2
> Use $P^2=(2)$, $Q^2=(3)$, and $PQ=(\delta)$, then invoke the two lattice shapes classified in Exercise 3.4.

## Solution

> [!success]- Solution
> **(a)** Evaluation at $\delta=0$ gives surjective homomorphisms
>
> $$
> R\longrightarrow\mathbb F_2
> \quad\text{and}\quad
> R\longrightarrow\mathbb F_3
> $$
>
> with kernels $P=(2,\delta)$ and $Q=(3,\delta)$, respectively. The quotients are fields, so both ideals are maximal and hence prime.
>
> **(b)** Direct multiplication gives
>
> $$
> P^2=(4,2\delta,-6)=(2),
> \qquad
> Q^2=(9,3\delta,-6)=(3).
> $$
>
> Therefore
>
> $$
> \boxed{(6)=(2)(3)=P^2Q^2.}
> $$
>
> Also $PQ=(6,2\delta,3\delta,-6)=(6,\delta)=(\delta)$, so this factorization agrees with $(6)=(\delta)^2$ up to the unit $-1$.
>
> **(c)** Exercise 3.4's shortest-vector classification shows that every ideal lattice in $R$ is similar either to $R$ or to $P=(2,\delta)$. Thus the class group has at most two elements. The ideal $P$ is not principal: a principal ideal of index $2$ would have a generator satisfying
>
> $$
> a^2+6b^2=2,
> $$
>
> which has no integer solution. Hence $[P]$ is nontrivial. Since $P^2=(2)$, it has order two. Finally $PQ=(\delta)$ shows $[Q]=[P]^{-1}=[P]$. Therefore
>
> $$
> \boxed{\operatorname{Cl}(R)\cong\mathbb Z/2\mathbb Z.}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Exercises/Exercise R156 - Ideal Lattice Shapes in Five Quadratic Orders|Ideal Lattice Shapes in Five Quadratic Orders]]

## Notes

- **Routing:** Ring Theory is primary because residue fields, prime-ideal products, and ideal similarity determine the class group.
- **Source status:** The problem is from [S1, Ch. 13, §13.7, Ex. 7.4, printed p. 410, PDF p. 422]. The quotient, product, and class-group computations are independent.
