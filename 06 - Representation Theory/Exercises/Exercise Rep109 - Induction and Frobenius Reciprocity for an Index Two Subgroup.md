---
title: "Exercise Rep109: Induction and Frobenius Reciprocity for an Index Two Subgroup"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.9, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep109: Induction and Frobenius Reciprocity for an Index Two Subgroup

## Problem Statement

> [!question] Miscellaneous Exercise M.9
> Let $H$ be a subgroup of index $2$ in a finite group $G$, and choose $a\notin H$. **(a)** Given $S:H\to GL_n$, prove that the source block formulas
>
> $$
> (\operatorname{ind}S)_h=\begin{pmatrix}S_h&0\\0&S_{a^{-1}ha}\end{pmatrix},\qquad
> (\operatorname{ind}S)_g=\begin{pmatrix}0&S_{ga}\\S_{a^{-1}g}&0\end{pmatrix}
> $$
>
> for $h\in H$, $g\in aH$, define a representation of $G$, and describe its character. **(b)** Prove $\operatorname{res}(\operatorname{ind}S)\cong S\oplus S'$, where $S'_h=S_{a^{-1}ha}$. **(c)** Prove Frobenius reciprocity $(\chi_{\operatorname{ind}S},\chi_R)=(\chi_S,\chi_{\operatorname{res}R})$. **(d)** For irreducible $S$, prove that $\operatorname{ind}S$ is irreducible when $S\not\cong S'$, and otherwise splits into two nonisomorphic irreducibles of $G$.

## Hints

> [!hint]- Hint 1
> Separate sums over $H$ and $aH$; the induced character vanishes on $aH$.

## Solution

> [!success]- Solution
> Multiplying the two block types in the four possible coset cases verifies the homomorphism law. The character is
>
> $$
> \chi_{\operatorname{ind}S}(h)=\chi_S(h)+\chi_S(a^{-1}ha),\qquad
> \chi_{\operatorname{ind}S}(g)=0\ (g\notin H).
> $$
>
> The two coordinate copies of $V$ are $H$-stable and carry $S,S'$, proving (b). For (c), substitute the character formula, use $|G|=2|H|$, and change variables by conjugation; the two terms become equal and give
>
> $$
> (\chi_{\operatorname{ind}S},\chi_R)_G=(\chi_S,\chi_{\operatorname{res}R})_H.
> $$
>
> Finally
>
> $$
> (\operatorname{ind}S,\operatorname{ind}S)_G
> =(S,S\oplus S')_H=1+(S,S')_H.
> $$
>
> If $S\not\cong S'$, the norm is $1$, hence the induction is irreducible. If $S\cong S'$, the norm is $2$; complete reducibility and the index-two block action show it is a sum of two distinct irreducibles, each restricting to $S$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- The block formulas and four parts were visually checked at [S1, Ch. 10, Misc. Ex. M.9, printed p. 321, PDF p. 333]; the proof is independent.

