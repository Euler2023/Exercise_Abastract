---
title: Implicit Function Theorem for Complex Polynomials
aliases:
  - Complex Polynomial Implicit Function Theorem
  - Nonsingular Complex Plane Curves
topic: arithmetic-geometry
tags:
  - concept
  - arithmetic-geometry
  - implicit-function-theorem
  - complex-curves
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Appendix, §A.4, printed pp. 519–520, PDF pp. 531–532"
source_status: verified
status: not-started
---

# Implicit Function Theorem for Complex Polynomials

## Definition

Write $x=x_0+ix_1$, $y=y_0+iy_1$, and a complex polynomial as $f=f_0+if_1$. The Cauchy-Riemann identities in the $y$ variable are

$$
\frac{\partial f_0}{\partial y_0}=\frac{\partial f_1}{\partial y_1},
\qquad
-\frac{\partial f_0}{\partial y_1}=\frac{\partial f_1}{\partial y_0}.
$$

They imply that if $f_y(a,b)\ne0$, then the real Jacobian of $(f_0,f_1)$ with respect to $(y_0,y_1)$ has positive determinant $|f_y(a,b)|^2$.

## Complex Polynomial Implicit Function Theorem

> [!abstract] Local graph theorem
> If $f(a,b)=0$ and $f_y(a,b)\ne0$, then near $(a,b)$ the zero locus of $f$ is the graph $y=Y(x)$ of a unique continuously differentiable complex-valued function with $Y(a)=b$.

This follows by applying the real implicit function theorem to the two real equations $f_0=f_1=0$.

## Geometric Consequence

If $f$, $f_x$, and $f_y$ have no common zero in $\mathbb C^2$, then at every point of $f=0$ one partial derivative is nonzero. The local graph theorem in $x$ or $y$ therefore supplies charts modeled on an open subset of $\mathbb C$. Hence the zero locus is a complex one-dimensional manifold, or equivalently a real two-dimensional manifold.

## Example

For $f(x,y)=y^2-x$, a point with $y\ne0$ has $f_y=2y\ne0$, so the curve is locally a graph $y=Y(x)$. At the origin $f_x=-1\ne0$, so it is instead locally the graph $x=y^2$. The curve is nonsingular everywhere despite the failure of the first graph orientation at the origin.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Curves over Number Fields|Curves over Number Fields]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The real/imaginary decomposition, Cauchy-Riemann lemma, and complex polynomial implicit function theorem were checked against [S1, Appendix, §A.4, printed pp. 519–520, PDF pp. 531–532]. The manifold consequence and example are independently expanded.
