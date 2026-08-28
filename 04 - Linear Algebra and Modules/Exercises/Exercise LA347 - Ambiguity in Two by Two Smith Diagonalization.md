---
title: "Exercise LA347: Ambiguity in Two-by-Two Smith Diagonalization"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - smith-normal-form
  - stabilizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.4, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA347: Ambiguity in Two-by-Two Smith Diagonalization

## Problem Statement

> [!question] Miscellaneous Problem M.4
> When an integer $2\times2$ matrix $A$ is diagonalized by $Q^{-1}AP$, how unique are the matrices $P$ and $Q$?

## Hints

> [!hint]- Hint 1
> Compare two pairs producing the same Smith diagonal $D$.

## Solution

> [!success]- Solution
> Fix one diagonalization
>
> $$
> Q^{-1}AP=D.
> $$
>
> Every other pair can be written $P'=PU$, $Q'=QV$ with $U,V\in\operatorname{GL}_2(\mathbb Z)$. It produces the same $D$ exactly when
>
> $$
> V^{-1}DU=D,
> $$
>
> or equivalently
>
> $$
> \boxed{DU=VD.}
> $$
>
> Thus the diagonal is canonical, but the transforming matrices are generally far from unique.
>
> In the nonsingular Smith case $D=\operatorname{diag}(d_1,d_2)$ with $d_2=h d_1$, write
>
> $$
> U=\begin{pmatrix}a&b\\c&e\end{pmatrix}.
> $$
>
> Then
>
> $$
> V=DUD^{-1}=\begin{pmatrix}a&b/h\\hc&e\end{pmatrix}.
> $$
>
> Hence one may choose any $U\in\operatorname{GL}_2(\mathbb Z)$ whose upper-right entry is divisible by $h$; $V$ is then forced by this formula. This already gives infinitely many choices.
>
> If $D=\operatorname{diag}(d,0)$ has rank one, the relation says
>
> $$
> U=\begin{pmatrix}a&0\\c&e\end{pmatrix},
> \qquad
> V=\begin{pmatrix}a&s\\0&f\end{pmatrix},
> $$
>
> where $a,e,f\in\{1,-1\}$ and $c,s\in\mathbb Z$. Thus the upper-left signs match, while the two lower-right signs are independent. If $D=0$, $P$ and $Q$ are completely independent unimodular matrices.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Linear Algebra is primary because the ambiguity is the left–right stabilizer of a Smith diagonal.
- **Convention:** The answer fixes the ordered positive Smith form. Permuting or changing signs of diagonal entries introduces the corresponding additional obvious choices when the diagonal convention is relaxed.
- **Source status:** [S1, Ch. 14, Misc. M.4, printed p. 440, PDF p. 452]. The stabilizer calculation is independent.
