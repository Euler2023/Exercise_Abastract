---
title: "Exercise LA684: The Binomial Formula for Iterated Matrix Commutators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-exponential
  - commutators
  - matrix-power-series
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 14, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-14"
created: 2026-11-25
---

# Exercise LA684: The Binomial Formula for Iterated Matrix Commutators

## Problem Statement

> [!question] Original Chapter 3, Exercise 14
> Let $X$ and $Y$ be $n\times n$ matrices. Show by induction that
> $$
> (\operatorname{ad}_X)^m(Y)=\sum_{k=0}^m\binom{m}{k}X^kY(-X)^{m-k},
> $$
> where
> $$
> (\operatorname{ad}_X)^m(Y)=\underbrace{[X,\cdots[X,[X,Y]]\cdots]}_{m}.
> $$
> Now, show by direct computation that
> $$
> e^{\operatorname{ad}_X}(Y)=\operatorname{Ad}_{e^X}(Y)=e^XYe^{-X}.
> $$
> Assume it is legal to multiply power series term by term. (This result was obtained indirectly in Proposition 3.35.)
>
> *Hint:* Use Pascal’s triangle.

## Hints

> [!hint]- Hint 1
> Applying $\operatorname{ad}_X$ adds one left factor $X$ in one term and one right factor $-X$ in the other term.

> [!hint]- Hint 2
> For each $k$ collect the contributions with $X^k$ on the left. After the induction, write $\binom{m}{k}/m!=1/(k!(m-k)!)$ and put $\ell=m-k$.

## Solution

> [!success]- Solution
> Set $\operatorname{ad}_X(Z)=[X,Z]=XZ+Z(-X)$ on the matrix space. At $m=0$ the claimed sum equals $Y$. Suppose the formula holds for $m$. Applying $\operatorname{ad}_X$ gives
> $$
> \begin{aligned}
> (\operatorname{ad}_X)^{m+1}(Y)
> &=
> \sum_{k=0}^{m}\binom{m}{k}X^{k+1}Y(-X)^{m-k}\\
> &\quad+\sum_{k=0}^{m}\binom{m}{k}X^kY(-X)^{m+1-k}.
> \end{aligned}
> $$
> Reindex the first sum by replacing $k+1$ with $k$. With $\binom{m}{j}=0$ outside $0\leq j\leq m$, the combined coefficient of $X^kY(-X)^{m+1-k}$ is $\binom{m}{k-1}+\binom{m}{k}=\binom{m+1}{k}$ for each $0\leq k\leq m+1$. This completes the induction.
>
> Insert the formula into the power series for the exponential of the linear operator $\operatorname{ad}_X$. The factorial identity rewrites the sum as
> $$
> \begin{aligned}
> e^{\operatorname{ad}_X}(Y)
> &=\sum_{m=0}^{\infty}\sum_{k=0}^{m}
> \frac{X^kY(-X)^{m-k}}{k!(m-k)!}\\
> &=\sum_{k,\ell\geq0}\frac{X^kY(-X)^\ell}{k!\,\ell!}\\
> &=\left(\sum_{k=0}^{\infty}\frac{X^k}{k!}\right)
> Y\left(\sum_{\ell=0}^{\infty}\frac{(-X)^\ell}{\ell!}\right)
> =e^XYe^{-X}.
> \end{aligned}
> $$
> For a submultiplicative operator norm with $\|I\|=1$, the sum of the norms of the double-series terms is bounded by $\|Y\|e^{2\|X\|}$, which also justifies regrouping. Multiplying the series for $e^X$ and $e^{-X}$ with $Y=I$ and combining coefficients yields $I$, since $\sum_{k=0}^m\binom{m}{k}(-1)^{m-k}=0$ for $m>0$. Hence $e^{-X}=(e^X)^{-1}$, and the displayed product is exactly $\operatorname{Ad}_{e^X}(Y)$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status.** The exercise and Pascal hint were checked at 200 dpi on printed p. 74 / PDF p. 86. Proposition 3.35 gives Hall's indirect proof of the exponential identity [S10, printed p. 64, PDF p. 76]. The solution uses the direct binomial and power-series argument requested in the exercise.
- **Concrete check.** For $X=E_{12}$ and $Y=E_{21}$, $X^2=0$, $[X,Y]=E_{11}-E_{22}$ and $[X,[X,Y]]=-2E_{12}$. The next iterated commutator vanishes. Both the series and $(I+X)Y(I-X)$ give $E_{21}+E_{11}-E_{22}-E_{12}$.
- **Routing.** The principal tools are ordered matrix multiplication, the binomial recurrence, and the Cauchy product for matrix series.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

