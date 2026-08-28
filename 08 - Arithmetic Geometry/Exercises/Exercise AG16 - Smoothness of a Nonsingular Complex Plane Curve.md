---
title: "Exercise AG16: Smoothness of a Nonsingular Complex Plane Curve"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - complex-curves
  - implicit-function-theorem
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.4, The Implicit Function Theorem, Ex. A.15, printed p. 522, PDF p. 534"
created: 2026-08-28
---

# Exercise AG16: Smoothness of a Nonsingular Complex Plane Curve

## Problem Statement

> [!question] Exercise A.15
> Let $f(x,y)$ be a complex polynomial. Assume that the equations
>
> $$
> f=0,
> \qquad
> \frac{\partial f}{\partial x}=0,
> \qquad
> \frac{\partial f}{\partial y}=0,
> $$
>
> have no common solution in $\mathbb C^2$. Prove that the locus $f=0$ is a manifold of dimension $2$.

## Hints

> [!hint]- Hint 1
> At every point of the zero locus, at least one complex partial derivative is nonzero. Apply the complex implicit function theorem in the corresponding coordinate.

## Solution

> [!success]- Solution
> Let
>
> $$
> X=\{(x,y)\in\mathbb C^2:f(x,y)=0\}.
> $$
>
> Take $p=(a,b)\in X$. By hypothesis, $f_x(p)$ and $f_y(p)$ cannot both vanish.
>
> If $f_y(p)\ne0$, the implicit function theorem for complex polynomials gives neighborhoods $U$ of $a$ and $V$ of $p$ together with a continuously differentiable function $Y:U\to\mathbb C$ such that
>
> $$
> X\cap V=\{(x,Y(x)):x\in U\}.
> $$
>
> Projection onto the $x$-coordinate is then a local coordinate chart from $X\cap V$ to the open subset $U\subseteq\mathbb C\cong\mathbb R^2$.
>
> If instead $f_x(p)\ne0$, interchange $x$ and $y$ and express $x$ locally as a function of $y$. Again, a neighborhood of $p$ in $X$ is homeomorphic, with continuously differentiable transition maps, to an open subset of $\mathbb C\cong\mathbb R^2$.
>
> These charts cover $X$. Therefore $X$ is a real manifold of dimension $2$—equivalently, a complex manifold of dimension $1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Implicit Function Theorem for Complex Polynomials|Implicit Function Theorem for Complex Polynomials]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Curves over Number Fields|Curves over Number Fields]]

## Notes

- **Routing:** Arithmetic Geometry is primary because the criterion identifies a nonsingular affine complex plane curve as a smooth real surface.
- **Hypothesis boundary:** The dimension stated in the source is real dimension $2$; the corresponding complex dimension is $1$. If the zero locus is empty, the assertion is vacuous under the usual empty-manifold convention.
- **External standard input:** The local graph statement is Theorem A.4.3, derived in the source from the real implicit function theorem.
- **Source status:** [S1, Appendix, §A.4, Ex. A.15, printed p. 522, PDF p. 534]. The local-chart proof is independent once Theorem A.4.3 is imported.
