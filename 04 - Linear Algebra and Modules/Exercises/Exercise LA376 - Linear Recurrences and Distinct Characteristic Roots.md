---
title: "Exercise LA376: Linear Recurrences and Distinct Characteristic Roots"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 31, printed pp. 256-257, PDF pp. 271-272"
created: 2026-09-06
---

# Exercise LA376: Linear Recurrences and Distinct Characteristic Roots

## Problem Statement

> [!question] Lang, Chapter V, Exercise 31
> **Difference equations.** Let $u_1,\ldots,u_d$ be elements of a field $K$. We want to solve for infinite vectors $(x_0,x_1,\ldots,x_n,\ldots)$ satisfying
> $$
> (*)\qquad x_n=u_1x_{n-1}+\cdots+u_dx_{n-d}\qquad(n\ge d).
> $$
> Define the characteristic polynomial of the system to be
> $$
> X^d-(u_1X^{d-1}+\cdots+u_d)=f(X).
> $$
> Suppose $\alpha$ is a root of $f$.
>
> (a) Show that $x_n=\alpha^n$ ($n\ge0$) is a solution of $(*)$.
>
> (b) Show that the set of solutions of $(*)$ is a vector space of dimension $d$.
>
> (c) Assume that the characteristic polynomial has $d$ distinct roots $\alpha_1,\ldots,\alpha_d$. Show that the solutions $(\alpha_1^n),\ldots,(\alpha_d^n)$ form a basis for the space of solutions.
>
> (d) Let $x_n=b_1\alpha_1^n+\cdots+b_d\alpha_d^n$ for $n\ge0$, show how to solve for $b_1,\ldots,b_d$ in terms of $\alpha_1,\ldots,\alpha_d$ and $x_0,\ldots,x_{d-1}$. (Use the Vandermonde determinant.)
>
> (e) Under the conditions of (d), let $F(T)=\sum x_nT^n$. Show that $F(T)$ represents a rational function, and give its partial fraction decomposition.

## Hints

> [!hint]- Hint 1
> Initial values $x_0,\ldots,x_{d-1}$ determine exactly one sequence.

> [!hint]- Hint 2
> The matrix of initial values of the root sequences is a Vandermonde matrix.

## Solution

> [!success]- Solution and proof status
> The order $d$ is positive. We use $0^0=1$, so a zero root gives the sequence $(1,0,0,\ldots)$. When the roots are not in $K$, the root-sequence statements are interpreted over a field $L$ containing them; take $L=K$ if they already lie in $K$.
>
> **(a)** Multiplying $\alpha^d=\sum_{j=1}^du_j\alpha^{d-j}$ by $\alpha^{n-d}$ proves the recurrence for $n\ge d$. This also works for $\alpha=0$, including $n=d$ under the convention above.
>
> **(b)** The equations are linear and homogeneous, so the $K$-valued solution sequences form a $K$-vector space. Evaluation on the first $d$ entries gives a linear bijection with $K^d$: any initial tuple extends uniquely by the recurrence. Hence the dimension is $d$. The same argument works over $L$.
>
> **(c)** The matrix with column $j$ equal to the first $d$ entries of the $j$th root sequence is
> $$
> V=(\alpha_j^r)_{\substack{0\le r<d\\1\le j\le d}},
> \qquad
> \det V=\prod_{i<j}(\alpha_j-\alpha_i)\ne0.
> $$
> Thus the sequences are linearly independent. There are $d$ of them in the $d$-dimensional solution space, so they are a basis.
>
> **(d)** Solve $Vb=(x_0,\ldots,x_{d-1})^{\mathsf T}$. Cramer's rule gives $b_j=\det V_j/\det V$, with column $j$ replaced by the initial-value vector. More explicitly, write
> $$
> \ell_j(Z)=\prod_{i\ne j}\frac{Z-\alpha_i}{\alpha_j-\alpha_i}
> =\sum_{r=0}^{d-1}c_{jr}Z^r.
> $$
> Since $\ell_j(\alpha_i)=\delta_{ji}$, the inverse-matrix formula is
> $$
> b_j=\sum_{r=0}^{d-1}c_{jr}x_r.
> $$
>
> **(e)** Summing formal geometric series yields
> $$
> F(T)=\sum_{j=1}^d\frac{b_j}{1-\alpha_jT}.
> $$
> This is the partial fraction expression over $L$; a zero $\alpha_j$ contributes a constant term. Independently of distinct roots, the recurrence also gives the rational expression over $K$
> $$
> F(T)=\frac{\displaystyle\sum_{r=0}^{d-1}
> \left(x_r-\sum_{j=1}^r u_jx_{r-j}\right)T^r}
> {1-u_1T-\cdots-u_dT^d}.
> $$
> Multiplication verifies the first $d$ coefficients, and every subsequent coefficient is zero by $(*)$. Formal power series require no analytic convergence.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Partial Fraction Decomposition|Partial Fraction Decomposition]]

## Notes

- **Base-field convention:** A root outside $K$ gives an extension-valued sequence. Parts (a), (c)–(e) describe a basis over a splitting field unless all characteristic roots lie in $K$. Part (b) always concerns the $K$-valued solution space.
- **Proof inputs:** The Vandermonde determinant and interpolation identities are proved in the linked concept note. The characteristic polynomial may have zero as one of its distinct roots.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 31, printed pp. 256-257, PDF pp. 271-272]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
