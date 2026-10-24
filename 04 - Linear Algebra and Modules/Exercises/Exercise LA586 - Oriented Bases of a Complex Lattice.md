---
title: "Exercise LA586: Oriented Bases of a Complex Lattice"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.3, Exercise 1.3.1, printed p. 31, PDF p. 46"
source_refs:
  - "S7/ch-1/sec-3/ex-1"
created: 2026-10-24
---

# Exercise LA586: Oriented Bases of a Complex Lattice

## Problem Statement

> [!question] Original Exercise 1.3.1
> Prove Lemma 1.3.1.
>
> **Lemma 1.3.1, included for independent reading:** Consider two lattices $\Lambda=\omega_1\mathbb Z\oplus\omega_2\mathbb Z$ and $\Lambda'=\omega_1'\mathbb Z\oplus\omega_2'\mathbb Z$ with $\omega_1/\omega_2\in\mathcal H$ and $\omega_1'/\omega_2'\in\mathcal H$. Then $\Lambda'=\Lambda$ if and only if
> $$
> \begin{pmatrix}\omega_1'\\\omega_2'\end{pmatrix}
> =\begin{pmatrix}a&b\\c&d\end{pmatrix}
> \begin{pmatrix}\omega_1\\\omega_2\end{pmatrix}
> \quad\text{for some }\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{SL}_2(\mathbb Z).
> $$
>
> The lemma is on printed p. 25 / PDF p. 40. Here $\mathcal H=\{z\in\mathbb C:\operatorname{Im}z>0\}$, and a lattice basis is linearly independent over $\mathbb R$.

## Hints

> [!hint]- Hint 1
> Express each basis in terms of the other. Both change matrices have integer entries.

> [!hint]- Hint 2
> The two matrices are inverses, so the determinant is $\pm1$. For $\tau=\omega_1/\omega_2$, compute the imaginary part of $(a\tau+b)/(c\tau+d)$ to determine the sign.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Suppose first that $\Lambda'=\Lambda$. There are integer matrices $A,B$ such that the column of primed basis elements is $A$ times the unprimed column and conversely the unprimed column is $B$ times the primed column. Substitution gives
> $$
> (BA-I)\begin{pmatrix}\omega_1\\\omega_2\end{pmatrix}=0.
> $$
> Every row gives an integer relation between two real-linearly independent complex numbers. Each row is therefore zero, so $BA=I$. Taking determinants yields $\det A\det B=1$, with both factors integers, and consequently $\det A\in\{1,-1\}$.
>
> Write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $\tau=\omega_1/\omega_2$. Since $\omega_2'=(c\tau+d)\omega_2\ne0$,
> $$
> \tau'=\frac{\omega_1'}{\omega_2'}=\frac{a\tau+b}{c\tau+d}.
> $$
> Multiplying numerator and denominator by $c\overline\tau+d$ and subtracting the conjugate expression gives
> $$
> \tau'-\overline{\tau'}
> =\frac{(a\tau+b)(c\overline\tau+d)-(a\overline\tau+b)(c\tau+d)}{|c\tau+d|^2}
> =\frac{(ad-bc)(\tau-\overline\tau)}{|c\tau+d|^2}.
> $$
> Thus
> $$
> \operatorname{Im}\tau'=\frac{\det A}{|c\tau+d|^2}\operatorname{Im}\tau.
> $$
> Both imaginary parts are positive by hypothesis, so $\det A>0$. Hence $\det A=1$.
>
> Conversely, suppose the displayed change of basis holds with $A\in\operatorname{SL}_2(\mathbb Z)$. Its integer entries give $\Lambda'\subseteq\Lambda$. Its inverse
> $$
> A^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}
> $$
> also has integer entries, so it expresses $\omega_1,\omega_2$ as integer combinations of $\omega_1',\omega_2'$. This gives $\Lambda\subseteq\Lambda'$ and proves equality.
>
> For a concrete check, the bases $(i,1)$ and $(i+1,1)$ of $i\mathbb Z+\mathbb Z$ are related by $\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Interchanging $(i,1)$ gives $(1,i)$, whose quotient is $-i$ in the lower half plane; this illustrates the role of the orientation hypothesis.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The exercise and the complete lemma were checked against rendered original pages at [Diamond–Shurman, Ch. 1, §1.3, printed pp. 25, 31, PDF pp. 40, 46]. The source assigns the lemma's proof to this exercise; the proof above is an independent derivation.
- **Routing:** The argument is an integral change-of-basis calculation followed by a determinant sign calculation, so its primary toolkit is linear algebra.
- **Boundary:** Without requiring both basis quotients to lie in $\mathcal H$, equality of lattices characterizes $\operatorname{GL}_2(\mathbb Z)$ change matrices, whose determinant may be $-1$.
