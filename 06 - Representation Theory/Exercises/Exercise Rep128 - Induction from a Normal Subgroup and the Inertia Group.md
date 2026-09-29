---
title: "Exercise Rep128: Induction from a Normal Subgroup and the Inertia Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - induced-representation
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 4, printed p. 723, PDF p. 738"
created: 2026-09-29
---

# Exercise Rep128: Induction from a Normal Subgroup and the Inertia Group

## Problem Statement

> [!question] Lang XVIII.4
> Let $S$ be a normal subgroup of $G$. Let $\psi$ be a simple character of $S$ over $\mathbb C$. Show that $\operatorname{ind}_S^G(\psi)$ is simple if and only if $\psi=[\sigma]\psi$ for all $\sigma\in S$.

> [!warning] Source issue: the printed condition is automatic
> The equality and the quantifier $\sigma\in S$ are both printed in the original. Since a character is constant on conjugacy classes, $[\sigma]\psi(s)=\psi(\sigma^{-1}s\sigma)=\psi(s)$ for every $\sigma\in S$, regardless of irreducibility of the induced character. For example, inducing the character of $S=\{1\}$ to $G=C_2$ gives the reducible regular character.
>
> The correct criterion is
>
> $$
> \operatorname{Ind}_S^G\psi\text{ irreducible}
> \quad\Longleftrightarrow\quad
> \psi\ne[\sigma]\psi\text{ for every }\sigma\in G\setminus S.
> $$
>
> Equivalently, the inertia group $I_G(\psi)=\{\sigma\in G:[\sigma]\psi=\psi\}$ must equal $S$.

## Hints

> [!hint]- Hint 1: Restrict the induced module back to $S$
> Choose representatives of $G/S$. The summand indexed by $tS$ is an $S$-module with character $[t]\psi$.

> [!hint]- Hint 2: Count endomorphisms
> Prove the induction–restriction adjunction directly on $\mathbb C[G]\otimes_{\mathbb C[S]}U$. Schur's lemma identifies the endomorphism dimension with the number of cosets fixing $\psi$.

## Solution

> [!success]- Independent proof of the corrected criterion and a counterexample to the printed one
> Let $U$ be an irreducible $S$-module with character $\psi$, and put $M=\mathbb C[G]\otimes_{\mathbb C[S]}U$. The formula $[g]\psi(s)=\psi(g^{-1}sg)$ defines an action of $G$ on the characters of $S$, because $S$ is normal. Thus $I=I_G(\psi)$ is a subgroup. It contains $S$, since characters are invariant under inner conjugation.
>
> If $T$ is a set of representatives of the left cosets of $S$, then
>
> $$
> M=\bigoplus_{t\in T}t\otimes U.
> $$
>
> For $s\in S$ we have $s(t\otimes u)=t\otimes(t^{-1}st)u$. Every summand is therefore $S$-stable with character $[t]\psi$.
>
> For any $G$-module $V$, restriction to $1\otimes U$ gives an isomorphism
>
> $$
> \operatorname{Hom}_G(M,V)\simeq\operatorname{Hom}_S(U,V).
> $$
>
> Its inverse sends an $S$-linear map $f:U\to V$ to the map $g\otimes u\mapsto gf(u)$. This is well-defined because $gs\otimes u=g\otimes su$ and $gsf(u)=gf(su)$, and it is $G$-linear. These constructions are inverse.
>
> Apply this with $V=M$. Each twisted summand is irreducible, so Schur's lemma gives
>
> $$
> \dim_{\mathbb C}\operatorname{End}_G(M)
> =\sum_{t\in T}\dim_{\mathbb C}\operatorname{Hom}_S(U,t\otimes U)
> =\#\{tS:[t]\psi=\psi\}=[I:S].
> $$
>
> Over $\mathbb C$, Maschke's theorem decomposes $M$ as $\bigoplus_j V_j^{\oplus m_j}$ with distinct irreducibles $V_j$. Schur's lemma then gives $\dim\operatorname{End}_G(M)=\sum_jm_j^2$. Since $M\ne0$, this number is $1$ exactly when $M$ is irreducible. Consequently $M$ is irreducible exactly when $[I:S]=1$, proving the corrected criterion.
>
> Finally, take $G=\{1,t\}\simeq C_2$, $S=\{1\}$, and $\psi=1$. The printed condition holds. However $M=\mathbb C[G]$ is the direct sum of the lines spanned by $1+t$ and $1-t$, with respective characters $1$ and $\mathrm{sgn}$. Hence the printed assertion is false.

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induction and Frobenius reciprocity]]
- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic components and inertia groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple modules]]

## Notes

- Source checked directly: [S2, Ch. XVIII, Exercise 4, printed p. 723, PDF p. 738]. The erroneous statement is preserved visibly, not silently replaced.
- Proof status: independent derivation of the corrected assertion. The proof uses Maschke's theorem and Schur's lemma, and proves the needed Frobenius adjunction explicitly.
- The corrected criterion also agrees with Lang's general induction criterion [S2, Ch. XVIII, Corollary 7.9, printed p. 696, PDF p. 711], specialized to a normal subgroup.
- All groups here are finite and all representations are finite-dimensional over $\mathbb C$.
