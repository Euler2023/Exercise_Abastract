---
title: "Exercise LA311: Pick's Theorem and the Lattice Area-Index Formula"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Miscellaneous Problem M.4, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise LA311: Pick's Theorem and the Lattice Area-Index Formula

## Problem Statement

> [!question] Miscellaneous Problem M.4
> Let $L$ denote the integer lattice $\mathbb Z^2$ in the plane $\mathbb R^2$, and let $P$ be a polygon in the plane whose vertices are points of $L$. Pick's Theorem asserts that the area $A(P)$ is equal to $a+b/2-1$, where $a$ is the number of points of $L$ in the interior of $P$, and $b$ is the number of points of $L$ on the boundary of $P$.
>
> **(a)** Prove Pick's Theorem.
>
> **(b)** Derive Proposition 13.10.6 from Pick's Theorem.

## Hints

> [!hint]- Hint 1
> Show that both area and $a+b/2-1$ are additive when two lattice polygons are glued along a lattice segment.

> [!hint]- Hint 2
> Reduce to a lattice triangle containing no lattice points except its three vertices; its determinant has absolute value one.

## Solution

> [!success]- Solution
> **(a)** Define
>
> $$
> \Phi(P)=a(P)+\frac{b(P)}2-1.
> $$
>
> Suppose two lattice polygons are glued along a lattice segment containing $g+1$ lattice points. The $g-1$ nonendpoint points of the segment become interior points of the union, while the boundary count loses $2g$ from the sum of the two separate boundary counts. Hence
>
> $$
> \Phi(P_1\cup P_2)=\Phi(P_1)+\Phi(P_2),
> $$
>
> exactly as for area.
>
> Triangulate $P$ using diagonals with lattice endpoints. It therefore suffices to prove the formula for a lattice triangle. If a triangle has an additional lattice point on its boundary or in its interior, split it at that point into two or three smaller lattice triangles. Their doubled areas are smaller positive integers, so induction reduces to a **primitive triangle**, one whose only lattice points are its three vertices.
>
> Translate one vertex of a primitive triangle to $0$, and call the other vertices $u,v\in\mathbb Z^2$. If $|\det(u,v)|>1$, the sublattice $\mathbb Zu+\mathbb Zv$ has more than one coset in $\mathbb Z^2$. Choose a nonzero lattice representative in its half-open fundamental parallelogram. Either that point or its reflection through $u+v$ lies in the triangle, contradicting primitivity. Therefore $|\det(u,v)|=1$, so the area is $1/2$. For a primitive triangle, $a=0$ and $b=3$, and indeed
>
> $$
> \frac12=0+\frac32-1.
> $$
>
> Additivity and induction now prove
>
> $$
> \boxed{A(P)=a(P)+\frac{b(P)}2-1}
> $$
>
> for every lattice polygon.
>
> **(b)** Let $L\subset M$ be planar lattices and let $P$ be the closed fundamental parallelogram of a basis of $L$. Apply an invertible linear map taking $M$ to $\mathbb Z^2$. In these normalized coordinates, $P$ is a lattice polygon.
>
> The half-open version of $P$ contains exactly one representative of each coset of $L$ in $M$, so it contains $[M:L]$ points. If the closed parallelogram has $a$ interior and $b$ boundary points, assigning one from each pair of opposite edges to the half-open region gives
>
> $$
> [M:L]=a+\frac b2-1.
> $$
>
> Pick's Theorem identifies the right side with the normalized area of $P$. Undoing the linear map converts normalized area into the Euclidean area ratio, yielding Proposition 13.10.6:
>
> $$
> \boxed{[M:L]=\frac{A(L)}{A(M)}.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA310 - Determinant Formula for Lattice Index|Determinant Formula for Lattice Index]]

## Notes

- **Routing:** Linear Algebra and Modules is primary because lattice bases, determinants, covolumes, and indices drive both parts.
- **Proof dependency:** The primitive-triangle step uses the elementary determinant/index result of Exercise 10.2, not Proposition 13.10.6, so the derivation in part (b) is not circular.
- **Source status:** The problem is from [S1, Ch. 13, Misc. M.4, printed p. 411, PDF p. 423]. The proof is independent.
