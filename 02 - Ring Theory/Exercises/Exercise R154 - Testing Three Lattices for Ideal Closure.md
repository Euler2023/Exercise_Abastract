---
title: "Exercise R154: Testing Three Lattices for Ideal Closure"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - ideal-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 3, Ideals in Z[sqrt(-5)], Ex. 3.2, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise R154: Testing Three Lattices for Ideal Closure

## Problem Statement

> [!question] Exercise 3.2
> Let $\delta=\sqrt{-5}$. Decide whether or not the lattice of integer combinations of the given vectors is an ideal:
>
> **(a)** $(5,1+\delta)$,
>
> **(b)** $(7,1+\delta)$,
>
> **(c)** $(4-2\delta,2+2\delta,6+4\delta)$.

## Hints

> [!hint]- Hint 1
> A lattice in $\mathbb Z[\delta]$ is an ideal exactly when it is stable under multiplication by $\delta$.

> [!hint]- Hint 2
> In part (c), form integer combinations that produce $2$ and $2\delta$.

## Solution

> [!success]- Solution
> **(a)** Let $L=(5,1+\delta)_{\mathbb Z}$. Although $5\delta=-5+5(1+\delta)$ lies in $L$, the other generator fails:
>
> $$
> \delta(1+\delta)=\delta-5.
> $$
>
> If this were $5m+n(1+\delta)$, comparison of $\delta$-coefficients would give $n=1$, and comparison of real parts would give $5m+1=-5$, impossible in integers. Thus $L$ is not an ideal.
>
> **(b)** The same calculation for $L=(7,1+\delta)_{\mathbb Z}$ would require
>
> $$
> 7m+1=-5,
> $$
>
> which has no integer solution. Hence this lattice is not an ideal either.
>
> **(c)** Put
>
> $$
> v_1=4-2\delta,
> \qquad v_2=2+2\delta,
> \qquad v_3=6+4\delta.
> $$
>
> The combinations
>
> $$
> -2v_2+v_3=2,
> \qquad
> 3v_2-v_3=2\delta
> $$
>
> show that the lattice contains the basis $(2,2\delta)$ of $2R$. Conversely, all three $v_i$ have even coefficients, so they lie in $2R$. Therefore the lattice is exactly
>
> $$
> 2R=(2),
> $$
>
> a principal ideal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because multiplication by the ring generator detects ideal closure.
- **Basis boundary:** Part (c) gives three generators for a rank-two lattice; they are not asserted to be a lattice basis.
- **Source status:** The problem is from [S1, Ch. 13, §13.3, Ex. 3.2, printed p. 408, PDF p. 420]. The closure failures and equality with $(2)$ are independently checked.
