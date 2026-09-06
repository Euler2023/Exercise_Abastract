---
title: "Exercise LA379: A Formal Exponential Interpolation Identity"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 34, printed pp. 258-259, PDF pp. 273-274"
created: 2026-09-06
---

# Exercise LA379: A Formal Exponential Interpolation Identity

## Problem Statement

> [!question] Lang, Chapter V, Exercise 34
> Let $x_1,\ldots,x_d$ be independent variables, and let $A$ be the ring
> $$
> A=\mathbb Q[[x_1,\ldots,x_d]][T]\big/\prod_{i=1}^d(T-x_i).
> $$
> Substituting some $x_i$ for $T$ induces a natural homomorphism $\varphi_i$ of $A$ onto
> $$
> \mathbb Q[[z_1,\ldots,x_d]]=R,
> $$
> and the map $z\mapsto(\varphi_1(z),\ldots,\varphi_d(z))$ gives an embedding of $A$ into the product of $R$ with itself $d$ times.
>
> Let $k$ be an integer, and consider the formal power series
> $$
> F(T)=e^{kT}\prod_{i=1}^d\frac{(T-x_i)e^{T-x_i}}{e^{T-x_i}-1}
> =e^{kT}\prod_{i=1}^dh(T-x_i),
> \qquad h(t)=\frac{te^t}{e^t-1}.
> $$
> It is a formal power series in $T,T-x_1,\ldots,T-x_d$. Under substitution of some $x_j$ for $T$ it becomes a power series in $x_j$ and $x_j-x_i$, and thus converges in $\mathbb Q[[x_1,\ldots,x_d]]$.
>
> (a) Verify that
> $$
> F(T)=a_0(F)+\cdots+a_{d-1}(F)T^{d-1}
> \pmod{\prod_{i=1}^d(T-x_i)}
> $$
> where $a_0(F),\ldots,a_{d-1}(F)\in\mathbb Q[[x_1,\ldots,x_d]]$, and that the formula given in the preceding exercise for these coefficients in terms of Vandermonde determinants is valid.
>
> (b) Show that $a_{d-1}(F)=0$ if $-(d-1)\le k<0$ and $a_{d-1}(F)=1$ if $k=0$.

> [!warning] Source issue
> The displayed coefficient ring prints $z_1$ although the independent variable is $x_1$; use $R=\mathbb Q[[x_1,\ldots,x_d]]$. In the source proof on printed p. 259 / PDF p. 274, the exponential numerator is printed $e^{(k+d+1)x_j}$. Direct cancellation gives $e^{(k+d-1)x_j}$, which also agrees with the last determinant printed on that page.

## Hints

> [!hint]- Hint 1
> The quotient algebra is finite free and complete for the $(x_1,\ldots,x_d)$-adic topology.

> [!hint]- Hint 2
> After taking the top interpolation coefficient, put $y_i=e^{x_i}$.

## Solution

> [!success]- Solution and proof status
> Use $R=\mathbb Q[[x_1,\ldots,x_d]]$, $\mathfrak m=(x_1,\ldots,x_d)$, and $g(T)=\prod_i(T-x_i)$, with $d\ge1$.
>
> **(a): existence and interpolation.** Monic division makes $A=R[T]/(g)$ a free $R$-module with basis $1,T,\ldots,T^{d-1}$. It is complete for the $\mathfrak m$-adic topology. Since all nonleading coefficients of $g$ belong to $\mathfrak m$, we have $T^d\in\mathfrak m A$, so $T$ is topologically nilpotent. Each $T-x_i$ is also topologically nilpotent: in a sufficiently high power, every binomial summand has either a high power of $T$ or a high power of $x_i$.
>
> The formal series $h(t)$ is well defined because
> $$
> h(t)=\frac{e^t}{(e^t-1)/t},
> $$
> and its denominator has constant coefficient one. Thus $h(0)=1$. All the substitutions defining $F(T)$ converge in $A$, producing unique coefficients $a_j(F)\in R$.
>
> Evaluation $T\mapsto x_i$ is continuous and gives
> $$
> F(x_i)=\sum_{j=0}^{d-1}a_j(F)x_i^j.
> $$
> The Vandermonde determinant $\prod_{i<j}(x_j-x_i)$ is a nonzero element of the domain $R$. Consequently Cramer's rule over $\operatorname{Frac}(R)$ gives the formulas of V.33. Their values lie in $R$ by the existence just proved. The same argument, applied to an element with all evaluations zero, proves injectivity of $A\to R^d$. Each individual evaluation is onto, since it fixes the constant subring $R$.
>
> **(b): the top coefficient.** Lagrange interpolation gives, in $\operatorname{Frac}(R)$,
> $$
> a_{d-1}(F)=\sum_{j=1}^d
> \frac{F(x_j)}{\prod_{i\ne j}(x_j-x_i)}.
> $$
> The factor indexed by $i=j$ in $F(x_j)$ equals $h(0)=1$. With $y_i=e^{x_i}$, cancellation of the other factors gives
> $$
> \begin{aligned}
> a_{d-1}(F)
> &=\sum_{j=1}^d e^{kx_j}
> \prod_{i\ne j}\frac{e^{x_j-x_i}}{e^{x_j-x_i}-1}\\
> &=\sum_{j=1}^d
> \frac{y_j^{k+d-1}}{\prod_{i\ne j}(y_j-y_i)}.
> \end{aligned}
> $$
> Each difference $y_j-y_i$ is nonzero, as its degree-one part is $x_j-x_i$. For $0\le r\le d-1$, interpolate the polynomial $Y^r$ at $y_1,\ldots,y_d$ and compare the coefficient of $Y^{d-1}$:
> $$
> \sum_{j=1}^d\frac{y_j^r}{\prod_{i\ne j}(y_j-y_i)}
> =
> \begin{cases}
> 0,&0\le r<d-1,\\
> 1,&r=d-1.
> \end{cases}
> $$
> Take $r=k+d-1$. This is in the first range exactly when $-(d-1)\le k<0$, and equals $d-1$ for $k=0$. Hence the required values follow as identities in $R$. At $d=1$ the negative range is empty and the $k=0$ assertion remains valid.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]

## Notes

- **Source-contained proof:** The remark on printed p. 259 / PDF p. 274 credits Roger Howe's Vandermonde argument and carries out part (b). The solution above follows that source-contained argument, repairs its exponent, and supplies the completeness and coefficient-ring details needed for part (a). It does not claim a new proof of the Hirzebruch–Grothendieck–Riemann–Roch theorem mentioned as motivation.
- **Additional notation:** The first determinant in that remark writes $V(x_1,\ldots,x_n)$ where the matrix has $d$ rows; the consistent endpoint is $x_d$.
- **Method boundary:** The embedding $A\to R^d$ is not claimed to be surjective. The Vandermonde determinant is generally not a unit, so an unrestricted Chinese-remainder decomposition over $R$ would be wrong.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 34, printed pp. 258-259, PDF pp. 273-274]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
