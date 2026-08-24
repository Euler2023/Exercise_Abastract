---
title: "Exercise LA267: Six Congruence Orbits of Symmetric Two by Two Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - sylvesters-law
  - matrix-orbits
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.1, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA267: Six Congruence Orbits of Symmetric Two by Two Matrices

## Problem Statement

> [!question] Miscellaneous Problem M.1
> According to Sylvester's Law, every $2\times2$ real symmetric matrix is congruent to exactly one of six standard types. List them. If we consider the operation of $GL_2$ on $2\times2$ matrices by $P*A=PAP^{\mathsf T}$, then Sylvester's Law asserts that the symmetric matrices form six orbits. We may view the symmetric matrices as points in $\mathbb R^3$, letting $(x,y,z)$ correspond to
>
> $$
> \begin{pmatrix}x&y\\y&z\end{pmatrix}.
> $$
>
> Describe the decomposition of $\mathbb R^3$ into orbits geometrically, and make a clear drawing depicting it.
>
> **Hint from the source.** If you don't get a beautiful result, you haven't understood the configuration.

## Hints

> [!hint]- Hint 1
> The determinant-zero locus is $xz-y^2=0$.

> [!hint]- Hint 2
> Use $u=(x+z)/2$, $v=(x-z)/2$, $w=y$ to turn this locus into a circular double cone.

## Solution

> [!success]- Solution
> The six inertia types are represented by
>
> $$
> I_2,\quad -I_2,\quad \operatorname{diag}(1,-1),\quad
> \operatorname{diag}(1,0),\quad \operatorname{diag}(-1,0),\quad 0.
> $$
>
> For $A=\begin{pmatrix}x&y\\y&z\end{pmatrix}$, put
>
> $$
> u=\frac{x+z}{2},
> \qquad
> v=\frac{x-z}{2},
> \qquad
> w=y.
> $$
>
> Then
>
> $$
> \det A=xz-y^2=u^2-v^2-w^2.
> $$
>
> Thus the singular matrices form the circular double cone $u^2=v^2+w^2$. Its upper nappe without the origin is the rank-one positive-semidefinite orbit $\operatorname{diag}(1,0)$; its lower nappe is the rank-one negative-semidefinite orbit $\operatorname{diag}(-1,0)$; the vertex is the zero orbit.
>
> Inside the upper cone, $\det A>0$ and $\operatorname{trace}A=2u>0$, so the matrices are positive definite and form the $I_2$ orbit. The lower interior is the $-I_2$ orbit. The connected exterior $u^2<v^2+w^2$ has negative determinant and is the indefinite orbit $\operatorname{diag}(1,-1)$.
>
> ![[Attachments/artin-algebra-2e-ch08-m1-symmetric-matrix-orbits.png]]

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA230 - Sylvesters Law of Inertia|Exercise LA230]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]

## Notes

- **Constructed figure:** New schematic TikZ construction of the exact cone $u^2=v^2+w^2$, not a source redraw. Editable source: [[Attachments/artin-algebra-2e-ch08-m1-symmetric-matrix-orbits.tex|TikZ]]. Vector output: [[Attachments/artin-algebra-2e-ch08-m1-symmetric-matrix-orbits.pdf|PDF]].
- **Source status:** The action, coordinate matrix, and hint were visually verified at [S1, Ch. 8, M.1, printed p. 258, PDF p. 270]. The orbit analysis and figure are independent.
