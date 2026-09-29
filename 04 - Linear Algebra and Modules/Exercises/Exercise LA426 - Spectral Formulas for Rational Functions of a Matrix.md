---
title: "Exercise LA426: Spectral Formulas for Rational Functions of a Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - rational-functions
  - characteristic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 10, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA426: Spectral Formulas for Rational Functions of a Matrix

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 10
> Generalize Theorem 3.10 to rational functions (instead of polynomials), assuming that $k$ is a field.

> [!info] Referenced theorem: polynomial case
> The field case of Theorem 3.10 says that if $M\in M_n(k)$, $f\in k[t]$, and $P_M(t)=\prod_{i=1}^n(t-\alpha_i)$ splits over $k$, then
>
> $$
> P_{f(M)}(t)=\prod_{i=1}^n(t-f(\alpha_i)),\qquad
> \operatorname{tr}(f(M))=\sum_{i=1}^nf(\alpha_i),\qquad
> \det(f(M))=\prod_{i=1}^nf(\alpha_i).
> $$
>
> The roots are listed with algebraic multiplicity. This is a restatement of [S2, Ch. XIV, Theorem 3.10, printed pp. 566–567, PDF pp. 581–582]; the printed theorem also allows a commutative coefficient ring.

## Hints

> [!hint]- Hint 1: Specify where evaluation is defined
> To define $f(M)=p(M)q(M)^{-1}$ for $f=p/q$, require $q$ to be nonzero at every eigenvalue. Use the polynomial determinant formula to see why this is exactly the invertibility condition for $q(M)$.

> [!hint]- Hint 2: Replace the rational function by a polynomial
> If $q$ and $P_M$ have no common root, write $u q+vP_M=1$ in $k[t]$. Cayley–Hamilton then shows that $u(M)$ is the inverse of $q(M)$.

## Solution

> [!success]- Solution
> **Precise rational-function version.** Let $k$ be a field, let $M\in M_n(k)$, and let $\alpha_1,\ldots,\alpha_n$ be its eigenvalues in a splitting field $L$, counted with algebraic multiplicity. Let $f\in k(t)$ have no pole at any $\alpha_i$. Equivalently, write $f=p/q$ in reduced form, with $p,q\in k[t]$, $q\ne0$, and require $q(\alpha_i)\ne0$ for every $i$. Then $f(M)$ is defined, and
>
> $$
> \begin{aligned}
> P_{f(M)}(t)&=\prod_{i=1}^n(t-f(\alpha_i)),\\
> \operatorname{tr}(f(M))&=\sum_{i=1}^nf(\alpha_i),\\
> \det(f(M))&=\prod_{i=1}^nf(\alpha_i).
> \end{aligned}
> $$
>
> In particular this gives the requested extension with $L=k$ when the characteristic polynomial already splits over $k$.
>
> **Definition and its independence of the fraction.** Theorem 3.10 applied to $q$ over $L$ gives
>
> $$
> \det(q(M))=\prod_{i=1}^nq(\alpha_i)\ne0.
> $$
>
> Thus $q(M)$ is invertible over $k$, and we define $f(M)=p(M)q(M)^{-1}$. If also $f=p'/q'$ with $q'(M)$ invertible, the polynomial identity $pq'=p'q$ gives $p(M)q'(M)=p'(M)q(M)$. All polynomial expressions in $M$ commute, as do their inverses when defined. Multiplication by both inverse denominators proves that the two definitions agree.
>
> **Reduction to the polynomial theorem.** The condition $q(\alpha_i)\ne0$ implies $\gcd(q,P_M)=1$ in $k[t]$. Indeed, a nonconstant common divisor would have a root in an algebraic closure, which would be a common root of both polynomials. Bézout's identity therefore gives $u,v\in k[t]$ with
>
> $$
> u(t)q(t)+v(t)P_M(t)=1.
> $$
>
> By Cayley–Hamilton, evaluation at $M$ yields $u(M)q(M)=I$. Hence, for $g=pu\in k[t]$, we have $f(M)=g(M)$. At each eigenvalue, $P_M(\alpha_i)=0$ gives $u(\alpha_i)q(\alpha_i)=1$, so
>
> $$
> g(\alpha_i)=p(\alpha_i)u(\alpha_i)
> =\frac{p(\alpha_i)}{q(\alpha_i)}=f(\alpha_i).
> $$
>
> Applying Theorem 3.10 to $g$ over $L$ proves all three displayed formulas. Although their right-hand sides are written using elements of $L$, they equal the characteristic polynomial, trace, and determinant of a matrix over $k$ and therefore lie in $k[t]$ or $k$, respectively.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]

## Notes

- **Source and proof status:** The exercise was checked at [S2, Ch. XIV, Ex. 10, printed p. 568, PDF p. 583], and the referenced theorem at [S2, Ch. XIV, Theorem 3.10, printed pp. 566–567, PDF pp. 581–582]. The no-pole formulation and rational-function extension are independent derivations. The polynomial theorem, Cayley–Hamilton, and polynomial Bézout identity are the named prior inputs.
- **Domain boundary:** An actual pole at an eigenvalue cannot be admitted: then the reduced denominator matrix is singular. A removable factor in an unreduced fraction should first be cancelled; the intrinsic condition concerns the rational function after cancellation.
- **Multiplicity and diagonalization:** Eigenvalues in the formulas retain their algebraic multiplicities. No assumption that $M$ is diagonalizable is made.
