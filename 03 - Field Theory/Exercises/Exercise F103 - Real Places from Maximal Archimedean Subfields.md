---
title: "Exercise F103: Real Places from Maximal Archimedean Subfields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - real-places
  - valuation-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 9, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F103: Real Places from Maximal Archimedean Subfields

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 9
> Let $K$ be a quadratically closed real field. Let $\varphi$ be a real place of $K$, taking its values in a real closed field $R$. Let $F$ be a maximal subfield of $K$ such that $\varphi$ is an isomorphism on $F$, and identify $F$ with $\varphi(F)$. Show that such $F$ exists and is maximal archimedean in $K$. Show that the image of $\varphi$ is algebraic over $F$, and that $\varphi$ is induced by the canonical place of $K$ over $F$.

## Hints

> [!hint]- Hint 1: Find a maximal subfield
> Work inside the valuation ring of $\varphi$. Subfields on which reduction is injective are closed under unions of chains.

> [!hint]- Hint 2: Use the real residue field
> In a valuation with real residue field, a finite sum of squares cannot cancel to zero at the lowest valuation. Deduce that its valuation ring is convex for the unique ordering of $K$.

> [!hint]- Hint 3: Exploit maximality twice
> An archimedean extension of $F$ inside $K$ remains in the valuation ring and still reduces injectively. A residue transcendental over $F$ would likewise yield a larger subfield on which reduction is injective.

## Solution

> [!success]- Solution
> Let $V=\{x\in K:\varphi(x)\ne\infty\}$ be the valuation ring, $\mathfrak n=\ker(\varphi|_V)$, and $k=V/\mathfrak n\subseteq R$ its real residue field. Since $K$ is quadratically closed and real, its nonzero squares form its unique positive cone, as in Exercise 8.
>
> **Step 1: the valuation ring is convex.** In a valuation with real residue field, if $\sum_j y_j^2\in V$, then every $y_j\in V$: if one has negative valuation, divide by a summand of smallest valuation and reduce to a nonzero sum of residue squares equal to zero. Now suppose $0<x<c$ with $c\in V$ positive. Both $x$ and $c-x$ are positive and therefore squares in $K$. Their sum $c$ lies in $V$, so the preceding fact gives $x\in V$. Hence $V$ is convex in the unique ordering of $K$.
>
> **Step 2: existence and maximal archimedeanity of $F$.** The collection of subfields $E\subseteq V$ on which $\varphi$ is injective is nonempty: it contains the prime field, since a place into the characteristic-zero field $R$ sends each nonzero rational to a nonzero rational. A union of a chain is again such a subfield. Zorn's lemma therefore gives a maximal member $F$, and $\varphi|_F$ identifies it with a subfield of $R$.
>
> If $E$ is a field with $F\subseteq E\subseteq K$ and $E$ archimedean over $F$, then for every $x\in E$ there is $c\in F_{>0}$ with $|x|<c$. Since $c\in V$ and $V$ is convex, $x\in V$. For $x\ne0$, the same bound applied to $x^{-1}\in E$ shows $x^{-1}\in V$, hence $x$ is a unit of $V$ and $\varphi(x)\ne0$. Thus $\varphi$ is injective on $E$. Maximality forces $E=F$, proving that $F$ is maximal archimedean in $K$.
>
> **Step 3: algebraicity of the image.** Suppose $b\in k$ were transcendental over $F=\varphi(F)$. Choose $x\in V$ with $\varphi(x)=b$. Every nonzero polynomial $Q\in F[T]$ then has $Q(b)\ne0$, so $Q(x)$ is a unit of $V$. Consequently $F(x)\subseteq V$ and reduction is injective on $F(x)$, contradicting maximality of $F$. Therefore $k/F$ is algebraic. The finite image of $\varphi$ is precisely $k$, so the claimed image is algebraic over $F$.
>
> **Step 4: identify the place.** Because $k$ is real and algebraic over $F$, the corrected real-residue form of Exercise 8 applies: its proof shows directly that a positive $F$-bounded element belongs to $V$ by writing $c=x+(c-x)$ as a sum of two squares, and that an element of $V$ cannot be infinitely large over $F$ because its algebraic residue is $F$-bounded. Hence $V=\mathcal O_F$, the canonical valuation ring for the order of $K/F$. Its maximal ideal is the canonical infinitesimal ideal $\mathfrak m_F$. Thus $\varphi$ is the canonical place followed by the residue embedding $\mathcal O_F/\mathfrak m_F\hookrightarrow R$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[02 - Ring Theory/Concepts/Partially Ordered Sets and Zorns Lemma|Partially Ordered Sets and Zorns Lemma]]

## Notes

- **Source and proof status:** [S2, Ch. XI, Exercise 9, printed p. 462, PDF p. 477]. The argument is independently derived. It uses Zorn's lemma and the explicit real-residue correction of Exercise 8, rather than the false unrestricted version of Exercise 8.
- **Terminology:** The “image” means the finite image $\varphi(V)=k\subseteq R$; poles have value $\infty$ and are excluded from the field extension $k/F$.
