---
title: "Exercise LA672: The Exponential of a Two by Two Triangular Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 5, printed pp. 46–47, PDF pp. 58–59"
source_refs:
  - "S10/ch-2/sec-6/ex-5"
created: 2026-11-17
---

# Exercise LA672: The Exponential of a Two by Two Triangular Matrix

## Problem Statement

> [!question] Original Chapter 2, Exercise 5
> For any $a$ and $d$ in $\mathbb C$, define the expression $(e^a-e^d)/(a-d)$ in the obvious way for $a\ne d$ and by means of the limit
> $$
> \lim_{a\to d}\frac{e^a-e^d}{a-d}=e^a
> $$
> when $a=d$. Show that for any $a,b,d\in\mathbb C$ we have
> $$
> \exp\begin{pmatrix}a&b\\0&d\end{pmatrix}
> =\begin{pmatrix}e^a&b\frac{e^a-e^d}{a-d}\\0&e^d\end{pmatrix}.
> $$
>
> *Hint:* Show that if $a\ne d$, then
> $$
> \begin{pmatrix}a&b\\0&d\end{pmatrix}^{m}
> =\begin{pmatrix}a^m&b\frac{a^m-d^m}{a-d}\\0&b^m\end{pmatrix}
> $$
> for every positive integer $m$.

> [!warning] Source issue: the lower-right entry in the printed hint
> The printed hint has $b^m$ in the lower-right entry. It must be $d^m$. Already for $m=1$, $a=0$, $b=1$, $d=2$, the printed right-hand matrix has lower-right entry 1 instead of 2. The original hint is preserved above; the proof uses the corrected power formula. The limiting coefficient in the statement is $e^d$, which equals $e^a$ when $a=d$.

## Hints

> [!hint]- Hint 1
> Compute the upper-right entry of the first few powers. It is $b$ times a finite geometric sum.

> [!hint]- Hint 2
> For unequal diagonal entries, sum the corrected power formula term by term. When the diagonal entries coincide, write the matrix as $aI+N$ with $N^2=0$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent calculation from the matrix exponential series, with the printed hint corrected explicitly.
>
> Put $T=\begin{pmatrix}a&b\\0&d\end{pmatrix}$. For $m\ge1$, define
> $$
> s_m=\sum_{r=0}^{m-1}a^{m-1-r}d^r.
> $$
> We claim
> $$
> T^m=\begin{pmatrix}a^m&bs_m\\0&d^m\end{pmatrix}.
> $$
> The formula is true for $m=1$, since $s_1=1$. If it holds for $m$, multiplication on the right by $T$ gives upper-right entry $b(a^m+ds_m)$. But
> $$
> a^m+ds_m
> =a^m+\sum_{r=0}^{m-1}a^{m-1-r}d^{r+1}
> =\sum_{r=0}^{m}a^{m-r}d^r=s_{m+1}.
> $$
> The diagonal entries become $a^{m+1}$ and $d^{m+1}$, completing the induction.
>
> **Unequal diagonal entries.** If $a\ne d$, the finite geometric identity gives
> $$
> s_m=\frac{a^m-d^m}{a-d}.
> $$
> Since $T^0=I$, summing its powers yields
> $$
> \begin{aligned}
> (e^T)_{11}&=\sum_{m=0}^{\infty}\frac{a^m}{m!}=e^a,\\
> (e^T)_{22}&=\sum_{m=0}^{\infty}\frac{d^m}{m!}=e^d,\\
> (e^T)_{12}&=\frac{b}{a-d}
> \sum_{m=1}^{\infty}\frac{a^m-d^m}{m!}
> =b\,\frac{e^a-e^d}{a-d},\\
> (e^T)_{21}&=0.
> \end{aligned}
> $$
> These scalar series are absolutely convergent. One can also bound the off-diagonal series directly: for $M=\max(1,|a|,|d|)$, $|s_m|\le mM^{m-1}$ and $\sum_{m\ge1}mM^{m-1}/m!=e^M$.
>
> **Equal diagonal entries.** If $a=d$, then $s_m=ma^{m-1}$. Equivalently, $T=aI+N$ with $N=\begin{pmatrix}0&b\\0&0\end{pmatrix}$ and $N^2=0$. The power formula gives
> $$
> e^T=e^aI+
> \left(\sum_{m=1}^{\infty}\frac{ma^{m-1}}{m!}\right)N
> =e^a(I+N)
> =\begin{pmatrix}e^a&be^a\\0&e^a\end{pmatrix}.
> $$
> Here the coefficient for $m=1$ is 1, including when $a=0$. Finally, setting $h=a-d$ in the divided difference shows
> $$
> \frac{e^a-e^d}{a-d}
> =e^d\frac{e^h-1}{h}\longrightarrow e^d
> \qquad(h\to0),
> $$
> so the two cases agree under the required limiting convention.
>
> For a concrete check, $a=d=0$ gives $T^2=0$ and $e^T=I+T=\begin{pmatrix}1&b\\0&1\end{pmatrix}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete statement and the hint, including its printed $b^m$ entry, were checked on the original 200 dpi images of printed pp. 46–47 / PDF pp. 58–59. The exponential formula itself is correct with the stated limiting convention.
- **Method boundary:** The calculation does not require diagonalizability. In particular, a repeated diagonal entry and a nonzero upper-right entry are handled directly rather than by a nonexistent eigenbasis.
- **Verification:** Exact symbolic checks verified the corrected power formula for $m=1,\ldots,6$ with symbolic $a,b,d$, the unequal-diagonal exponential through its differential equation and initial value, and the repeated-diagonal specialization. These checks supplement the all-$m$ induction.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
