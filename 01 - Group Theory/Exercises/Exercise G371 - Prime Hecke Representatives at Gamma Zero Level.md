---
title: "Exercise G371: Prime Hecke Representatives at Gamma Zero Level"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.4, printed p. 176, PDF p. 190"
source_refs:
  - "S7/ch-5/sec-2/ex-4"
created: 2026-10-28
---

# Exercise G371: Prime Hecke Representatives at Gamma Zero Level

## Problem Statement

> [!question] Original Exercise 5.2.4
> Show that letting $\Gamma_1=\Gamma_2=\Gamma_0(N)$ and keeping $\alpha=\begin{pmatrix}1&0\\0&p\end{pmatrix}$ gives the same orbit representatives $\{\beta_j\}$ for $\Gamma_1\backslash\Gamma_1\alpha\Gamma_2$.
>
> **Representatives (5.2), printed p. 170 / PDF p. 184.** They are
> $$
> \beta_j=\begin{pmatrix}1&j\\0&p\end{pmatrix},\quad0\leq j<p,
> \qquad\beta_\infty=\begin{pmatrix}m&n\\N&p\end{pmatrix}\begin{pmatrix}p&0\\0&1\end{pmatrix},
> $$
> where $mp-nN=1$ and the exceptional term is present only if $p\nmid N$.

## Hints

> [!hint]- Hint 1
> Repeat the coset calculation with $\Gamma_0(N)$; its diagonal entries need only be units modulo $N$.

> [!hint]- Hint 2
> The condition for a finite representative remains $b-ja\equiv0\pmod p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $G=\Gamma_0(N)$ and $H=\alpha^{-1}G\alpha\cap G$. For $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G$, the conjugate $\alpha g\alpha^{-1}=\begin{pmatrix}a&b/p\\pc&d\end{pmatrix}$ is in $G$ exactly when $p\mid b$. Thus $H=G\cap\Gamma^0(p)$.
>
> Let $g\in G$. If $p\nmid a$, choose $0\leq j<p$ with $j\equiv ba^{-1}\pmod p$. Then $g\gamma_{2,j}^{-1}$ lies in $G$ and its upper right entry $b-ja$ is divisible by $p$, so $g\in H\gamma_{2,j}$.
>
> If $p\mid a$, then $p\nmid N$: otherwise $N\mid c$ and $p\mid a$ would force $p\mid ad-bc=1$. With the exceptional matrix from the preceding problem,
> $$
> g\gamma_{2,\infty}^{-1}
> =\begin{pmatrix}a-bN&-an+bmp\\c-dN&-cn+dmp\end{pmatrix}
> $$
> lies in $G$ and has upper right entry divisible by $p$. Hence it lies in $H$. This proves completeness of the same coset list. Their distinctness follows from the products $\gamma_{2,j}\gamma_{2,l}^{-1}$ and $\gamma_{2,j}\gamma_{2,\infty}^{-1}$ computed above: their upper right entries are respectively $j-l$ and $-n+jmp$, with $n$ a unit modulo $p$.
>
> Multiplication on the left by $\alpha$ identifies $H\backslash G$ with $G\backslash G\alpha G$ by Lemma 5.1.2 [printed p. 164 / PDF p. 178]. The resulting matrices are exactly the stated $\beta_j$. Finally, $B=\begin{pmatrix}m&n\\N&p\end{pmatrix}$ has determinant $1$ and lower left entry divisible by $N$, so $B\in G$. Therefore $G\beta_\infty=G\operatorname{diag}(p,1)$, explaining the optional simpler representative at $\Gamma_0$ level.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.4, printed p. 176 / PDF p. 190]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The original representatives and their simplified version were checked on printed pp. 170–171 / PDF pp. 184–185.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
