---
title: "Exercise LA545: Nakayama's Lemma for a Finitely Generated Quotient"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 7, printed p. 72, PDF p. 91"
created: 2026-10-20
---

# Exercise LA545: Nakayama's Lemma for a Finitely Generated Quotient

## Problem Statement

> [!question] Neukirch I.11.7
> **(Nakayama's Lemma).** Let $A$ be a local ring with maximal ideal $\mathfrak m$, let $M$ be an $A$-module and $N\subseteq M$ a submodule such that $M/N$ is finitely generated. Then one has the implication:
> $$
> M=N+\mathfrak m M\quad\Longrightarrow\quad M=N.
> $$

## Hints

> [!hint]- Hint 1: Pass to the finitely generated module
> Put $Q=M/N$. The hypothesis becomes $Q=\mathfrak m Q$. Only $Q$, not necessarily $M$ or $N$, is finitely generated.

> [!hint]- Hint 2: Build a matrix from generators
> Choose generators $q_1,\ldots,q_r$ for $Q$. Write $q_i=\sum_j a_{ij}q_j$ with all $a_{ij}\in\mathfrak m$. Then $(I-(a_{ij}))(q_j)_j=0$.

> [!hint]- Hint 3: Use a determinant that is a unit
> The determinant of $I-(a_{ij})$ is $1$ modulo $\mathfrak m$, hence a unit in the local ring. Multiply the vector equation by the adjugate matrix.

## Solution

> [!success]- Independent derivation
> Let $Q=M/N$. The image of $\mathfrak m M$ under the projection $M\to Q$ is $\mathfrak m Q$, because both are the finite sums of elements $a(m+N)$ with $a\in\mathfrak m$ and $m\in M$. Thus the assumed equality implies
> $$
> Q=\mathfrak m Q.
> $$
> By hypothesis $Q$ has a finite set of generators $q_1,\ldots,q_r$. If $r=0$, then $Q=0$ and we are done. Otherwise every $q_i$ is a finite sum of elements of $\mathfrak m$ times elements of $Q$. Expressing those latter elements in the chosen generators gives
> $$
> q_i=\sum_{j=1}^r a_{ij}q_j,\qquad a_{ij}\in\mathfrak m.
> $$
> Let $C=(\delta_{ij}-a_{ij})$ and let $q$ be the column vector of generators. Then $Cq=0$. The adjugate identity over a commutative ring gives
> $$
> \operatorname{adj}(C)C=(\det C)I_r,
> \qquad (\det C)q_i=0\quad\text{for every }i.
> $$
> Modulo $\mathfrak m$, the matrix $C$ is the identity, so $\det C\equiv1\pmod{\mathfrak m}$. Thus $\det C\notin\mathfrak m$. In a local ring, every element outside the unique maximal ideal is a unit: a nonunit would generate a proper ideal contained in a maximal ideal, necessarily $\mathfrak m$. Multiplying $(\det C)q_i=0$ by its inverse shows $q_i=0$ for every $i$.
>
> Therefore $Q=0$, which means $M/N=0$ and hence $M=N$. Only the stated quotient has been required to be finitely generated; the proof adds no finiteness condition on $M$ or $N$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 7, printed p. 72, PDF p. 91]. No source figure is required. The solution is an independent derivation.
- **Proof inputs:** Finite module generation, the adjugate identity for matrices over commutative rings, and the local-ring unit criterion are used. The source poses Nakayama's lemma as an exercise; the matrix proof above is independent.
- **Hypothesis boundary:** Finite generation belongs to $M/N$ alone. Without it the conclusion can fail: over $A=\mathbb Z_{(p)}$, the nonzero module $Q=\mathbb Q$ satisfies $pQ=Q$ but is not finitely generated over $A$: denominators of a finite set of rational generators have bounded powers of $p$, whereas $Q$ contains $1/p^k$ for every $k$. Taking $M=Q$ and $N=0$ shows why a finiteness hypothesis is needed.
- **Routing:** A finite generator vector, an endomorphism matrix, and its determinant provide the decisive argument, so Linear Algebra and Modules is primary.
