---
title: "Exercise G356: Finiteness of Cusps from Coset Representatives"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.1, printed p. 62, PDF p. 77; Lemma 2.4.1, printed p. 58, PDF p. 73"
source_refs:
  - "S7/ch-2/sec-4/ex-1"
created: 2026-10-28
---

# Exercise G356: Finiteness of Cusps from Coset Representatives

## Problem Statement

> [!question] Original Exercise 2.4.1
> Prove Lemma 2.4.1.
>
> **Referenced Lemma 2.4.1.** The modular curve $X(1)=SL_2(\mathbb Z)\backslash\mathcal H^*$ has one cusp. For any congruence subgroup $\Gamma$ of $SL_2(\mathbb Z)$ the modular curve $X(\Gamma)$ has finitely many cusps.
>
> Here $\mathcal H^*=\mathcal H\cup\mathbb Q\cup\{\infty\}$, and the cusps are the $\Gamma$-orbits in $\mathbb Q\cup\{\infty\}$.

## Hints

> [!hint]- Hint 1
> Write a rational number as $a/c$ with $\gcd(a,c)=1$. Complete the column $(a,c)^{\mathsf T}$ to a determinant-one integer matrix.

> [!hint]- Hint 2
> If $SL_2(\mathbb Z)=\bigcup_{j=1}^d\Gamma\alpha_j$, every cusp is equivalent under $\Gamma$ to one of the $\alpha_j(\infty)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution. The integer input is Bézout's identity.
>
> Put $G=SL_2(\mathbb Z)$. For any $s=a/c\in\mathbb Q$ in lowest terms, Bézout's identity gives integers $b,d$ such that $ad-bc=1$. Consequently
> $$
> \alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G,
> \qquad \alpha(\infty)=\frac ac=s.
> $$
> The identity matrix takes $\infty$ to itself. Thus $G$ acts transitively on $\mathbb Q\cup\{\infty\}$, and its orbit set has exactly one element. This proves the assertion about $X(1)$.
>
> Since $\Gamma$ is congruence, it contains $\Gamma(N)$ for some positive integer $N$. The latter is the kernel of reduction modulo $N$, whose image is a finite group. Hence $[G:\Gamma(N)]$ and therefore $d=[G:\Gamma]$ are finite.
>
> Choose representatives with
> $$
> G=\coprod_{j=1}^d\Gamma\alpha_j.
> $$
> Every cusp representative has the form $s=\alpha(\infty)$ for some $\alpha\in G$. Write $\alpha=\eta\alpha_j$ with $\eta\in\Gamma$. Then
> $$
> \Gamma s=\Gamma\eta\alpha_j(\infty)=\Gamma\alpha_j(\infty).
> $$
> Therefore the map $\{1,\ldots,d\}\longrightarrow\Gamma\backslash(\mathbb Q\cup\{\infty\})$, sending $j$ to $\Gamma\alpha_j(\infty)$, is surjective. In particular, $X(\Gamma)$ has at most $d$ cusps. Distinct representatives can give the same cusp, so this argument gives a finite upper bound rather than an equality.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The exercise and its referenced lemma were checked against the original rendered pages: [S7, Exercise 2.4.1, printed p. 62 / PDF p. 77; Lemma 2.4.1, printed p. 58 / PDF p. 73]. The source assigns the lemma's proof to this exercise; the derivation above is independent.
- **Method boundary:** Transitivity and finite-index coset decomposition suffice. The same proof works for every finite-index subgroup of $SL_2(\mathbb Z)$; congruence is used only to ensure finite index.
- **Routing:** The main work is the orbit and coset argument, so the exercise is filed under Group Theory.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
