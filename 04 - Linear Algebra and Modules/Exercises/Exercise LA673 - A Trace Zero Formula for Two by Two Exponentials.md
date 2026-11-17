---
title: "Exercise LA673: A Trace Zero Formula for Two by Two Exponentials"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 6, printed p. 47, PDF p. 59"
source_refs:
  - "S10/ch-2/sec-6/ex-6"
created: 2026-11-17
---

# Exercise LA673: A Trace Zero Formula for Two by Two Exponentials

## Problem Statement

> [!question] Original Chapter 2, Exercise 6
> Show that every $2\times2$ matrix $X$ with $\operatorname{trace}(X)=0$ satisfies
> $$
> X^2=-\det(X)I.
> $$
> If $X$ is $2\times2$ with trace zero, show by direct calculation using the power series for the exponential that
> $$
> e^X=\cos\left(\sqrt{\det X}\right)I+
> \frac{\sin\sqrt{\det X}}{\sqrt{\det X}}X,
> \tag{2.12}
> $$
> where $\sqrt{\det X}$ is either of the two (possibly complex) square roots of $\det X$. Use this to give an alternative computation of the exponential $e^{X_1}$ in Example 2.5.
>
> *Note:* The value of the coefficient of $X$ in (2.12) is to be interpreted as 1 when $\det X=0$, in accordance with the limit $\lim_{\theta\to0}\sin\theta/\theta=1$.

**Source notation.** The matrix from Example 2.5 is
$$
X_1=\begin{pmatrix}0&-a\\a&0\end{pmatrix}.
$$
[S10, §2.2, Example 2.5, printed p. 34, PDF p. 46]

## Hints

> [!hint]- Hint 1
> Write $X=\begin{pmatrix}u&v\\w&-u\end{pmatrix}$ and square it directly.

> [!hint]- Hint 2
> Separate the exponential series into its even and odd powers. The squared relation reduces each even power to a scalar multiple of $I$ and each odd power to a scalar multiple of $X$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent entry calculation and power-series derivation; no diagonalization or Cayley–Hamilton theorem is required.
>
> Write
> $$
> X=\begin{pmatrix}u&v\\w&-u\end{pmatrix}.
> $$
> Direct multiplication gives
> $$
> X^2=\begin{pmatrix}u^2+vw&uv-vu\\wu-uw&wv+u^2\end{pmatrix}
> =(u^2+vw)I=-\det(X)I.
> $$
> Put $\Delta=\det X$. Induction on $k$ now gives
> $$
> X^{2k}=(-\Delta)^kI,\qquad
> X^{2k+1}=(-\Delta)^kX\qquad(k\ge0).
> $$
> The exponential series is absolutely convergent, so its even and odd terms can be grouped:
> $$
> e^X=
> \left(\sum_{k=0}^{\infty}\frac{(-\Delta)^k}{(2k)!}\right)I+
> \left(\sum_{k=0}^{\infty}\frac{(-\Delta)^k}{(2k+1)!}\right)X.
> $$
> Choose $z\in\mathbb C$ with $z^2=\Delta$. If $z\ne0$, the scalar sine and cosine series give
> $$
> \sum_{k=0}^{\infty}\frac{(-\Delta)^k}{(2k)!}=\cos z,\qquad
> \sum_{k=0}^{\infty}\frac{(-\Delta)^k}{(2k+1)!}
> =\frac{\sin z}{z}.
> $$
> If $z=0$, both series have value 1, so $e^X=I+X$. Thus the formula holds also at $\Delta=0$ with the coefficient prescribed by the printed note.
>
> The square-root choice causes no ambiguity. Replacing $z$ by $-z$ preserves $\cos z$, and also preserves $\sin z/z$. Both coefficients are in fact entire functions of $\Delta$ as their displayed series show.
>
> For Example 2.5, $\det X_1=a^2$, so choose the square root $z=a$. For $a\ne0$,
> $$
> \begin{aligned}
> e^{X_1}
> &=\cos a\,I+\frac{\sin a}{a}
> \begin{pmatrix}0&-a\\a&0\end{pmatrix}\\
> &=\begin{pmatrix}\cos a&-\sin a\\
> \sin a&\cos a\end{pmatrix}.
> \end{aligned}
> $$
> If $a=0$, then $X_1=0$ and both this matrix formula and the power series give $I$. This recovers the source example without using its diagonalization calculation.
>
> As another check, $X=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ has $\Delta=0$ and $X^2=0$, so the result gives exactly $e^X=I+X$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete exercise, the limiting note, and the matrix $X_1$ in Example 2.5 were checked on the original 200 dpi page images. The solution is independently derived.
- **Field and branch boundary:** The argument works for complex $2\times2$ matrices and therefore for real ones. A negative real determinant uses a complex square root; this produces hyperbolic rather than circular scalar functions, with no change in the formula.
- **Verification:** Exact symbolic multiplication verified $X^2=-\det(X)I$ for symbolic entries $u,v,w$. The complete exponential formula follows from the power-series argument, not from a finite truncation.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
