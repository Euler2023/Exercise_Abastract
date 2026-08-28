---
title: "Exercise R156: Ideal Lattice Shapes in Five Quadratic Orders"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - ideal-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 3, Ideals in Z[sqrt(-5)], Ex. 3.4, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R156: Ideal Lattice Shapes in Five Quadratic Orders

## Problem Statement

> [!question] Exercise 3.4
> For each ring $R$ listed below, use the method of Proposition 13.3.3 to describe the ideals in $R$. Make a drawing showing the possible shapes of the lattices in each case.
>
> **(a)** $R=\mathbb Z[\sqrt{-3}]$,
>
> **(b)** $R=\mathbb Z[\frac12(1+\sqrt{-3})]$,
>
> **(c)** $R=\mathbb Z[\sqrt{-6}]$,
>
> **(d)** $R=\mathbb Z[\frac12(1+\sqrt{-7})]$,
>
> **(e)** $R=\mathbb Z[\sqrt{-10}]$.

## Hints

> [!hint]- Hint 1
> Choose a shortest nonzero $\alpha\in A$ and scale to the fractional ideal $B=\alpha^{-1}A$. Then $R\subseteq B$, the shortest nonzero length in $B$ is $1$, and the finite index $[B:R]$ is strongly bounded by lattice area.

> [!hint]- Hint 2
> Enumerate the index-two superlattices by the three nonzero classes of $\frac12R/R$. For $\mathbb Z[\sqrt{-10}]$, also rule out index three using the action of multiplication by $\sqrt{-10}$ modulo $3$.

## Solution

> [!success]- Solution
> Let $A$ be a nonzero ideal and choose $\alpha\in A$ of least nonzero absolute value. Put $B=\alpha^{-1}A$. Then $R\subseteq B$, because $\alpha R\subseteq A$, and $1$ is a shortest nonzero vector of $B$.
>
> We use the elementary lattice estimate
>
> $$
> \Delta(B)\ge\frac{\sqrt3}{2}.
> $$
>
> Indeed, take a shortest vector of length $1$, adjust a second basis vector so that its projection on the first lies between $-1/2$ and $1/2$, and use that the second vector also has length at least $1$. Its perpendicular height is at least $\sqrt3/2$. Since
>
> $$
> [B:R]=\frac{\Delta(R)}{\Delta(B)},
> $$
>
> only indices two or three can occur in the cases below.
>
> The exhaustive result is:
>
> | Ring | Possible normalized bases for $B$ | Integral model for a nonprincipal shape | Number of shapes |
> |---|---|---|---:|
> | $\mathbb Z[\delta]$, $\delta^2=-3$ | $(1,\delta)$ or $(1,(1+\delta)/2)$ | $(2,1+\delta)$ | 2 |
> | $\mathbb Z[(1+\sqrt{-3})/2]$ | the ring basis only | none | 1 |
> | $\mathbb Z[\delta]$, $\delta^2=-6$ | $(1,\delta)$ or $(1,\delta/2)$ | $(2,\delta)$ | 2 |
> | $\mathbb Z[(1+\sqrt{-7})/2]$ | the ring basis only | none | 1 |
> | $\mathbb Z[\delta]$, $\delta^2=-10$ | $(1,\delta)$ or $(1,\delta/2)$ | $(2,\delta)$ | 2 |
>
> Thus every ideal is a complex scalar multiple of one of the displayed model lattices. In the one-shape cases every ideal is principal.
>
> Here is the finite check behind the table. The covolumes of the five rings are respectively
>
> $$
> \sqrt3,\quad\frac{\sqrt3}{2},\quad\sqrt6,
> \quad\frac{\sqrt7}{2},\quad\sqrt{10}.
> $$
>
> The area bound gives maximum indices $2,1,2,1,3$. For $R=\mathbb Z[\delta]$, an index-two superlattice corresponds to one of the three nonzero half-classes
>
> $$
> \frac12,qquad\frac\delta2,qquad\frac{1+\delta}{2}pmod R.
> $$
>
> A class is allowed only if adjoining it neither creates a vector shorter than $1$ nor destroys stability under multiplication by $\delta$. For $d=-3$, only $(1+\delta)/2$ survives. For $d=-6$ and $d=-10$, only $\delta/2$ survives. In the last case an index-three superlattice would give a one-dimensional invariant subspace for multiplication by $\delta$ on $R/3R$. Its matrix has characteristic polynomial $x^2+10\equiv x^2+1$ over $\mathbb F_3$, which has no root, so no such subspace exists. This proves exhaustiveness.

## Lattice Shape Diagram

![[Attachments/artin-algebra-2e-ch13-ex-3.4-ideal-lattice-shapes.png]]

Each blue parallelogram is a normalized fundamental cell; gray points show the corresponding lattice. Different panels use the same Euclidean coordinate convention, so angles and side ratios encode the asserted similarity types.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because ideal closure under the quadratic-order generator selects the admissible superlattices; lattice geometry supplies the finite bound.
- **Order boundary:** Part (a) uses the nonmaximal order $\mathbb Z[\sqrt{-3}]$, while part (b) uses the full ring of integers of $\mathbb Q(\sqrt{-3})$; their ideal behavior is therefore genuinely different.
- **Asset provenance:** The diagram is a new TikZ construction from the classified bases, not a source crop. Editable source: [[Attachments/artin-algebra-2e-ch13-ex-3.4-ideal-lattice-shapes.tex]]. Vector output: [[Attachments/artin-algebra-2e-ch13-ex-3.4-ideal-lattice-shapes.pdf]].
- **Source status:** The problem is from [S1, Ch. 13, §13.3, Ex. 3.4, printed p. 409, PDF p. 421]. The area bound, finite superlattice check, classification, and figure are independent.
