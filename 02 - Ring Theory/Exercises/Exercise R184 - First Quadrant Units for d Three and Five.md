---
title: "Exercise R184: First-Quadrant Units for d = 3 and d = 5"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - units
  - quadratic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 9, Real Quadratic Fields, Ex. 9.5, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise R184: First-Quadrant Units for d = 3 and d = 5

## Problem Statement

> [!question] Exercise 9.5
> Let $R$ be the ring of integers in a real quadratic number field, and let $U_0$ denote the set of units of $R$ that are in the first quadrant in the embedding (13.9.2).
>
> **(a)** Prove that $U_0$ is an infinite cyclic subgroup of the group of units.
>
> **(b)** Find a generator for $U_0$ when $d=3$ and when $d=5$.
>
> **(c)** Draw a figure showing the hyperbolas and the units in a reasonable size range for $d=3$.

## Hints

> [!hint]- Hint 1
> Multiplication is coordinatewise under the two embeddings. Choose the smallest first coordinate greater than $1$ among first-quadrant units.

> [!hint]- Hint 2
> For $d=5$, remember that the ring of integers is $\mathbb Z[(1+\sqrt5)/2]$.

## Solution

> [!success]- Solution
> **(a)** The first quadrant is closed under coordinatewise multiplication and inversion on the hyperbola $uv=1$, so $U_0$ is a subgroup. It is infinite: squaring all units supplied by Theorem 13.9.9 places them in $U_0$, and a nonzero quadratic polynomial has only finitely many square roots, so infinitely many distinct squares remain.
>
> Bounded regions contain only finitely many points of the embedded lattice. Hence among the units with first coordinate $u>1$, there is one, say $\varepsilon$, with least $u$. For any $\alpha\in U_0$ with first coordinate at least $1$, choose $n$ so that
>
> $$
> \varepsilon^n\le\alpha<\varepsilon^{n+1}
> $$
>
> in the first coordinate. Then $1\le\alpha\varepsilon^{-n}<\varepsilon$. Minimality forces $\alpha\varepsilon^{-n}=1$. Inverting handles first coordinate below $1$, so
>
> $$
> \boxed{U_0=\langle\varepsilon\rangle\cong\mathbb Z.}
> $$
>
> **(b)** For $d=3$, the least solution greater than $1$ of $x^2-3y^2=1$ is
>
> $$
> \boxed{\varepsilon_3=2+\sqrt3.}
> $$
>
> For $d=5$, put $\eta=(1+\sqrt5)/2$. Its conjugate is negative, so $\eta\notin U_0$, but
>
> $$
> \boxed{\varepsilon_5=\eta^2=\frac{3+\sqrt5}{2}}
> $$
>
> has two positive embeddings and is the least such unit greater than $1$.
>
> **(c)** For $d=3$, the units have norm $1$; there are no norm-$-1$ units because $x^2\equiv-1\pmod3$ is impossible. The highlighted points below are $\pm\varepsilon_3^n$ for $-2\le n\le2$.
>
> ![[Attachments/artin-algebra-2e-ch13-ex-9.5-units-d3.png]]

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because the proof classifies a subgroup of the unit group; the figure records its real embeddings.
- **Figure convention:** The gray points are the embedded lattice $\mathbb Z[\sqrt3]$ in the displayed window. Orange points are units. The $uv=-1$ hyperbola is shown for comparison but contains no lattice unit for $d=3$.
- **Source figure:** The embedding convention and hyperbolas were checked against Figure 13.9.6 at [S1, Ch. 13, §13.9, printed p. 403, PDF p. 415], and the exercise at printed p. 411 / PDF p. 423. The image is an independent TikZ reconstruction.
