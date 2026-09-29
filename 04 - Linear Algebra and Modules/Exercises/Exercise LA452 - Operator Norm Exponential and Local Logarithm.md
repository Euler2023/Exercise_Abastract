---
title: "Exercise LA452: Operator Norm Exponential and Local Logarithm"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-exponential
  - matrix-logarithm
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 10, printed p. 597, PDF p. 612"
created: 2026-09-29
---

# Exercise LA452: Operator Norm Exponential and Local Logarithm

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 10
> **Shared setting.** $E$ is a non-zero finite dimensional real vector space with a symmetric positive definite scalar product and its associated vector norm $|\ |$.
>
> If $A$ is an endomorphism of $E$, define its norm $|A|$ to be the greatest lower bound of all numbers $C$ such that $|Ax|\leq C|x|$ for all $x\in E$.
>
> (a) Show that this norm satisfies the triangle inequality.
>
> (b) Show that the series
>
> $$
> \exp(A)=I+A+\frac{A^2}{2!}+\cdots
> $$
>
> converges, and if $A$ commutes with $B$, then $\exp(A+B)=\exp(A)\exp(B)$. If $A$ is sufficiently close to $I$, show that the series
>
> $$
> \log(A)=\frac{A-I}{1}-\frac{(A-I)^2}{2}+\cdots
> $$
>
> converges, and if $A$ commutes with $B$, then $\log(AB)=\log A+\log B$.
>
> (c) Using the spectral theorem, show how to define $\log P$ for arbitrary positive definite endomorphisms $P$.

> [!warning] Source clarification: the logarithm product law is local
> For the power-series logarithm, both factors and their product must be in a suitable neighborhood of $I$; commutativity alone does not supply its domain. A sufficient uniform condition proved below is $\|A-I\|<1/4$ and $\|B-I\|<1/4$. In part (c), “positive definite” includes symmetry, as in the chapter's shared setting.

## Hints

> [!hint]- Hint 1: Compare with scalar series
> Express the operator norm as the maximum of $\|Ax\|$ on the unit sphere and prove $\|AB\|\leq\|A\|\|B\|$. This bounds the exponential and logarithm series by scalar convergent series.

> [!hint]- Hint 2: Prove the logarithm law along a path
> For commuting $X=A-I$ and $Y=B-I$, differentiate the convergent series along $(I+sX)(I+sY)$, $0\leq s\leq1$. For part (c), assign the scalar $\log\lambda$ to the eigenspace of a positive eigenvalue $\lambda$.

## Solution

> [!success]- Independent derivation with explicit convergence domains
> **(a), the operator norm.** Write $\|\cdot\|$ for both vector and operator norms. The continuous function $x\mapsto\|Ax\|$ attains a finite maximum on the compact unit sphere. Homogeneity shows that
>
> $$
> \|A\|=\max_{\|x\|=1}\|Ax\|
> =\sup_{x\ne0}\frac{\|Ax\|}{\|x\|}.
> $$
>
> This value is exactly the infimum in the question, since it is both an admissible bound and no larger than any admissible bound. For every $x$,
>
> $$
> \|(A+B)x\|\leq\|Ax\|+\|Bx\|
> \leq(\|A\|+\|B\|)\|x\|,
> $$
>
> proving $\|A+B\|\leq\|A\|+\|B\|$. The same definition gives $\|AB\|\leq\|A\|\|B\|$, $\|cA\|=|c|\|A\|$, and $\|I\|=1$.
>
> **(b), exponential.** The finite-dimensional space $\operatorname{End}_{\mathbb R}(E)$ is complete. Since $\|A^m/m!\|\leq\|A\|^m/m!$ and the scalar exponential converges, the operator series converges absolutely for every $A$. If $AB=BA$, absolute convergence permits grouping its Cauchy product by total degree:
>
> $$
> \begin{aligned}
> \exp(A)\exp(B)
> &=\sum_{r=0}^{\infty}\sum_{j=0}^r
> \frac{A^jB^{r-j}}{j!(r-j)!}\\
> &=\sum_{r=0}^{\infty}\frac{(A+B)^r}{r!}
> =\exp(A+B).
> \end{aligned}
> $$
>
> The binomial formula applies because $A$ and $B$ commute; absolute convergence is bounded by $\exp(\|A\|)\exp(\|B\|)$. In particular $\exp(A)^{-1}=\exp(-A)$.
>
> **(b), logarithm and its product law.** If $\|X\|<1$, the series
>
> $$
> \log(I+X)=\sum_{m=1}^{\infty}\frac{(-1)^{m+1}X^m}{m}
> $$
>
> converges absolutely, bounded by $\sum_{m\geq1}\|X\|^m/m$. Also $I+X$ is invertible, with inverse $\sum_{m\geq0}(-X)^m$.
>
> Now assume $AB=BA$ and $a=\|A-I\|<1/4$, $b=\|B-I\|<1/4$. Put $X=A-I$, $Y=B-I$, and for $0\leq s\leq1$ put
>
> $$
> A_s=I+sX,\qquad B_s=I+sY,\qquad C_s=A_sB_s.
> $$
>
> All these operators and their derivatives commute, because they are polynomials in the commuting $X,Y$. Moreover
>
> $$
> \|C_s-I\|\leq s(a+b)+s^2ab\leq a+b+ab<\frac9{16}<1.
> $$
>
> Thus the logarithm series of $A_s,B_s,C_s$ all converge uniformly on the path, as do their derivative series. Indeed, if $Z_s$ is any of these operators minus $I$, then $Z_sZ_s'=Z_s'Z_s$, and the derivative of its $m$th logarithm term has norm at most $\|Z_s'\|\|Z_s\|^{m-1}$, bounded by a convergent geometric series uniformly in $s$. Termwise differentiation and the inverse geometric series give
>
> $$
> \frac{d}{ds}\log(I+Z_s)=(I+Z_s)^{-1}Z_s'.
> $$
>
> Since $C_s'=XB_s+A_sY$, we obtain
>
> $$
> \frac{d}{ds}\log C_s
> =C_s^{-1}(XB_s+A_sY)
> =A_s^{-1}X+B_s^{-1}Y
> =\frac{d}{ds}(\log A_s+\log B_s).
> $$
>
> At $s=0$ all three logarithms vanish. Integrating the equality of derivatives from $0$ to $1$ proves $\log(AB)=\log A+\log B$ in this explicit common neighborhood.
>
> **(c), positive definite logarithm.** By the real symmetric spectral theorem, a positive definite $P$ has an orthogonal eigenspace decomposition $E=\bigoplus_{\lambda>0}E_\lambda(P)$. Define
>
> $$
> (\log P)|_{E_\lambda(P)}=(\log\lambda)I.
> $$
>
> This definition is independent of a basis inside each eigenspace. Equivalently, if $P=Q\operatorname{diag}(\lambda_i)Q^{\mathsf T}$ with $Q$ orthogonal, then $\log P=Q\operatorname{diag}(\log\lambda_i)Q^{\mathsf T}$. It is symmetric and satisfies $\exp(\log P)=P$, by evaluation on each eigenspace. If $\|P-I\|<1$, then $|\lambda_i-1|<1$ and the operator series acts there by the scalar convergent logarithm series, so it agrees with this spectral definition.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA451 - Positivity Square Roots and Real Polar Decomposition|Exercise LA451]]

## Notes

- **Source and proof status:** The entire exercise and shared setting were checked at [S2, Ch. XV, Ex. 10, printed p. 597, PDF p. 612]. The norm estimates and local product-law proof are independent. Part (c) uses [S2, Ch. XV, §7, Theorem 7.1 and Corollary 7.2, printed p. 585, PDF p. 600], checked visually, together with the positivity criterion proved in LA451.
- **Analysis inputs:** Compactness of the finite-dimensional unit sphere, completeness of finite-dimensional normed spaces, the absolute Cauchy-product theorem, uniform termwise differentiation, and the scalar exponential/logarithm series are named standard analysis inputs. These are convergent real operator series, not merely formal identities.
- **Boundary:** General matrix logarithms are not globally unique. The logarithm in (b) is the series branch near $I$; (c) specifies the real spectral logarithm for symmetric positive definite operators.
