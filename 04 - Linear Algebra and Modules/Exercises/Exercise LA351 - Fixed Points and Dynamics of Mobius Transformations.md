---
title: "Exercise LA351: Fixed Points and Dynamics of Mobius Transformations"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - projective-transformations
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 55, printed pp. 81-82, PDF pp. 96-97"
created: 2026-08-28
---

# Exercise LA351: Fixed Points and Dynamics of Mobius Transformations

## Problem Statement

> [!question] Exercise 55 — printed statement
> Let
>
> $$
> M=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{GL}_2(\mathbb C)
> $$
>
> act on $\mathbb C\cup\{\infty\}$ by $M(z)=(az+b)/(cz+d)$, with $M(-d/c)=\infty$ when $c\ne0$. Let $\lambda,\lambda'$ be the eigenvalues and let $W=(w_1,w_2)^T$, $W'=(w'_1,w'_2)^T$ be corresponding eigenvectors. Assume that $M$ has two distinct finite fixed points.
>
> (a) Show that there are at most two fixed points and that they are $w=w_1/w_2$ and $w'=w'_1/w'_2$; one may normalize $W=(w,1)^T$, $W'=(w',1)^T$.
>
> (b) If $|\lambda|<|\lambda'|$ and $z\ne w$, show that $M^k(z)\to w'$ as $k\to\infty$.

> [!warning] Source issue
> The stated assumption does not exclude a scalar matrix. A scalar matrix fixes every projective point, so the “at most two” conclusion is then false. The intended statement requires $M$ to be non-scalar (equivalently here, to have exactly the two displayed fixed eigenlines). The proof below makes that correction explicit.

## Hints

> [!hint]- Hint 1
> Fixed points are eigenlines. In the eigenbasis $S=(W,W')$, the induced projective map is multiplication by $(\lambda/\lambda')^k$.

## Solution

> [!success]- Solution under the non-scalar hypothesis
> **(a)** A finite fixed point satisfies
>
> $$
> z=\frac{az+b}{cz+d},
> \qquad\text{hence}\qquad
> cz^2+(d-a)z-b=0.
> $$
>
> For non-scalar $M$, this polynomial is not identically zero, so there are at most two finite fixed points. Moreover, $z$ is fixed exactly when
>
> $$
> M\binom z1=(cz+d)\binom z1,
> $$
>
> so the line through $(z,1)^T$ is an eigenline. The two distinct finite fixed points therefore correspond to $W,W'$, giving $w=w_1/w_2$, $w'=w'_1/w'_2$ and the stated normalizations.
>
> **(b)** Let $S=(W,W')$. Then
>
> $$
> S^{-1}MS=\begin{pmatrix}\lambda&0\\0&\lambda'\end{pmatrix}.
> $$
>
> In the projective affine coordinate determined by this basis,
>
> $$
> S^{-1}M^kS(\zeta)=\left(\frac{\lambda}{\lambda'}\right)^k\zeta.
> $$
>
> The excluded point $z=w$ is the point at infinity in this coordinate. For every other $z$, the coordinate is finite and tends to $0$ because $|\lambda/\lambda'|<1$. Transforming back by $S$, the point $0$ is the eigenline $W'$, hence $M^k(z)\to w'$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[01 - Group Theory/Exercises/Exercise G324 - Free Matrix Groups from Projective Ping Pong|Exercise G324]]

## Notes

- **Routing rationale:** Fixed-point equations, eigenvectors, change of basis, and eigenvalue asymptotics do the main computational work, so this exercise is routed to Linear Algebra and Modules despite appearing in Lang's Groups chapter.
- **Source issue:** The scalar-matrix counterexample is preserved explicitly rather than silently excluded.
- **Source status:** The formula, eigenvector notation, and both page halves were visually checked at [S2, Ch. I, Ex. 55, printed pp. 81-82, PDF pp. 96-97]. The corrected proof is independent.

