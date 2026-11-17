---
title: "Exercise LA674: An Explicit Two by Two Matrix Exponential"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 7, printed p. 47, PDF p. 59"
source_refs:
  - "S10/ch-2/sec-6/ex-7"
created: 2026-11-17
---

# Exercise LA674: An Explicit Two by Two Matrix Exponential

## Problem Statement

> [!question] Original Chapter 2, Exercise 7
> Use the result of Exercise 6 to compute the exponential of the matrix
> $$
> X=\begin{pmatrix}4&3\\-1&2\end{pmatrix}.
> $$
>
> *Hint:* Reduce the calculation to the trace-zero case.

## Hints

> [!hint]- Hint 1
> Subtract one-half of the trace times the identity.

> [!hint]- Hint 2
> Set $Y=X-3I$. Compute $Y^2$ and $\det Y$, then apply the trace-zero formula to $Y$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent calculation applying the result proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA673 - A Trace Zero Formula for Two by Two Exponentials|Exercise LA673]].
>
> Since $\operatorname{trace}X=6$, write
> $$
> X=3I+Y,\qquad
> Y=\begin{pmatrix}1&3\\-1&-1\end{pmatrix}.
> $$
> Then $\operatorname{trace}Y=0$, and direct calculation gives
> $$
> \det Y=-1+3=2,\qquad
> Y^2=\begin{pmatrix}-2&0\\0&-2\end{pmatrix}=-2I.
> $$
> The scalar matrix $3I$ commutes with $Y$. Expanding by the binomial formula and summing the absolutely convergent series therefore gives
> $$
> \begin{aligned}
> e^{3I+Y}
> &=\sum_{m=0}^{\infty}\sum_{j=0}^{m}
> \frac{3^{m-j}Y^j}{(m-j)!j!}\\
> &=\left(\sum_{k=0}^{\infty}\frac{3^k}{k!}\right)
> \left(\sum_{j=0}^{\infty}\frac{Y^j}{j!}\right)
> =e^3e^Y.
> \end{aligned}
> $$
> Let $r=\sqrt2$. Exercise 6 gives
> $$
> e^Y=\cos r\,I+\frac{\sin r}{r}Y.
> $$
> Hence the requested exponential is
> $$
> e^X=e^3
> \begin{pmatrix}
> \cos\sqrt2+\dfrac{\sin\sqrt2}{\sqrt2}
> &\dfrac{3\sin\sqrt2}{\sqrt2}\\
> -\dfrac{\sin\sqrt2}{\sqrt2}
> &\cos\sqrt2-\dfrac{\sin\sqrt2}{\sqrt2}
> \end{pmatrix}.
> $$
>
> A check that retains the parameter is
> $$
> E(t)=e^{3t}
> \left(\cos(rt)I+\frac{\sin(rt)}{r}Y\right).
> $$
> It satisfies $E(0)=I$. Differentiating and using $Y^2=-r^2I$ gives
> $$
> \begin{aligned}
> E'(t)
> &=e^{3t}\left[
> (3\cos(rt)-r\sin(rt))I+
> \left(\frac{3\sin(rt)}r+\cos(rt)\right)Y\right]\\
> &=(3I+Y)E(t)=XE(t).
> \end{aligned}
> $$
> In particular, $E'(0)=3I+Y=X$, as required of $e^{tX}$. An additional determinant check is
> $$
> \det E(t)=e^{6t}
> \left(\cos^2(rt)+2\frac{\sin^2(rt)}{r^2}\right)
> =e^{6t}.
> $$
> The value at $t=1$ agrees with the displayed answer and is invertible.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete numbered exercise, all four matrix entries, and its printed hint were checked on the original 200 dpi page image. The solution is independently supplied.
- **Method boundary:** Removing half the trace produces a traceless matrix in dimension two. The scalar exponential factor can be separated because a scalar matrix commutes with every matrix; no unrestricted identity $e^{A+B}=e^Ae^B$ is being assumed.
- **Verification:** Exact symbolic checks verified $Y^2=-2I$, $E(0)=I$, the full matrix identity $E'(t)=XE(t)$, and $\det E(t)=e^{6t}$.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
