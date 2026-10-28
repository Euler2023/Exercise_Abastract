---
title: "Exercise LA603: Oriented Conjugacy of Elliptic Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.7, Exercise 3.7.1, printed p. 97, PDF p. 111"
source_refs:
  - "S7/ch-3/sec-7/ex-1"
created: 2026-10-28
---

# Exercise LA603: Oriented Conjugacy of Elliptic Matrices

## Problem Statement

> [!question] Original Exercise 3.7.1
> (a) Show that if $\gamma$ generates a nontrivial isotropy subgroup in $\operatorname{SL}_2(\mathbb Z)$ then $\gamma$ and $\gamma^{-1}$ are not conjugate in $\operatorname{GL}_2^+(\mathbb Q)$. (Hints for this exercise are at the end of the book.)
>
> (b) Show that any two conjugacy classes in a group are either equal or disjoint.
>
> (c) Show that the $\Gamma_0^\pm(N)$-conjugacy class of $\gamma\in\Gamma_0(N)$ is the union of the $\Gamma_0(N)$-conjugacy classes of $\gamma$ and $D\gamma D$, where $D=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Show that if $\gamma$ has order4 or6 then this union is disjoint.
>
> (d) Let $\gamma=B\begin{pmatrix}0&-1\\1&0\end{pmatrix}B^{-1}=\begin{pmatrix}3&-2\\5&-3\end{pmatrix}$, where $B=\begin{pmatrix}1&1\\1&2\end{pmatrix}$, an order-four element of $\Gamma_0(5)$. Show that $\gamma$ is not conjugate to its inverse in $\Gamma_0^\pm(5)$.
>
> Here $\Gamma_0^\pm(N)=\{\alpha\in\operatorname{GL}_2(\mathbb Z):\alpha_{21}\equiv0\pmod N\}$.

> [!warning] Source issue
> The central subgroup $\{\pm I\}$ is nontrivial as a matrix group but has trivial effective action. Its generator $-I$ equals its inverse. Thus(a) requires the elliptic, effectively nontrivial isotropy intended in this section, equivalently a generator of order four or six.

## Hints

> [!hint]- Hint 1
> Write a real elliptic matrix as $aI+bJ$, where $J^2=-I$. Matrices commuting with $J$ have positive determinant; those anticommuting have negative determinant.

> [!hint]- Hint 2
> In(d), conjugate back by $B$ and enumerate integral matrices anticommuting with $S$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** The intended nontrivial isotropy is effective: its generator has order four or six. Its characteristic polynomial has nonreal roots. Over $\mathbb R$ it can be written $\gamma=aI+bJ$ with $b\ne0$, $J^2=-I$, and $\gamma^{-1}=aI-bJ$. If $P\gamma P^{-1}=\gamma^{-1}$, then $PJ=-JP$. In a real basis with $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, solving that equation gives $P=\begin{pmatrix}r&s\\s&-r\end{pmatrix}$ and $\det P=-r^2-s^2<0$. Therefore such a $P$ cannot lie in $\operatorname{GL}_2^+(\mathbb Q)$.
>
> **(b)** If classes of $x$ and $y$ share $z=axa^{-1}=byb^{-1}$, then $y=b^{-1}ax(b^{-1}a)^{-1}$. Substituting this expression into every conjugate of $y$ shows its class equals that of $x$; the reverse inclusion is identical.
>
> **(c)** The determinant map gives $\Gamma_0^\pm(N)=\Gamma_0(N)\sqcup\Gamma_0(N)D$. Conjugating in the two cosets gives exactly the stated union. If $D\gamma D=h\gamma h^{-1}$ for $h\in\Gamma_0(N)$, then $h^{-1}D$ commutes with $\gamma$ and has determinant $-1$. This is impossible: in the basis above a commuting matrix is $\begin{pmatrix}r&-s\\s&r\end{pmatrix}$, of positive determinant $r^2+s^2$. By(b) the two classes are disjoint.
>
> **(d)** Suppose $P\in\Gamma_0^\pm(5)$ conjugates $\gamma$ to $\gamma^{-1}$. Then $Q=B^{-1}PB$ is integral unimodular and anticommutes with $S$. Hence $Q=\begin{pmatrix}r&s\\s&-r\end{pmatrix}$ with $r^2+s^2=1$. Up to sign it is either $D$ or $U=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Direct multiplication gives
> $$
> BDB^{-1}=\begin{pmatrix}3&-2\\4&-3\end{pmatrix},\qquad
> BUB^{-1}=\begin{pmatrix}1&0\\3&-1\end{pmatrix}.
> $$
> Their lower-left entries, and their negatives, are nonzero modulo five. No candidate belongs to $\Gamma_0^\pm(5)$, a contradiction.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 97 / PDF 111. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
