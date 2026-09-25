---
title: "Exercise F101: Canonical Place after Real Closure"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - real-closed-fields
  - real-places
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 7, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F101: Canonical Place after Real Closure

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 7
> Let $K$ be an ordered field and let $F$ be a subfield which is maximal archimedean in $K$. Let $K'$ be the real closure of $K$ (preserving the ordering), and let $F'$ be the real closure of $F$ contained in $K'$. Let $\varphi$ be the canonical place of $K'$ with respect to $F'$. Show that $\varphi(K')$ is $F'$-valued, and that the restriction of $\varphi$ to $K$ is equivalent to the canonical place of $K$ over $F$.

## Hints

> [!hint]- Hint 1: Compare the two valuation rings
> Every element algebraic over an ordered field is bounded in absolute value by an element of that field. Apply this to $F'/F$.

> [!hint]- Hint 2: Compare residue fields
> If an extension of valued fields is algebraic, its residue-field extension is algebraic. Prove this by reducing a minimal polynomial after dividing its coefficients by one of minimum valuation.

> [!hint]- Hint 3: Use real closedness
> Exercise 6 makes the original residue field algebraic over $F$. The new residue field is real and contains $F'$. Can a real closed field have a proper real algebraic extension?

## Solution

> [!success]- Solution
> Write $\mathcal O_F=\{x\in K:|x|\le c\text{ for some }c\in F_{>0}\}$ and $\mathfrak m_F=\{x\in K:|x|<c\text{ for every }c\in F_{>0}\}$. Define $\mathcal O_{F'}$ and $\mathfrak m_{F'}$ similarly inside $K'$. These are the canonical valuation rings and maximal ideals of Chapter XI, §1.
>
> **Step 1: restriction of the valuation.** Lang's root bound (Lemma 2.6, printed p. 453 / PDF p. 468) shows that each element of the ordered algebraic extension $F'/F$ is bounded by some element of $F$. If $x\in K$ is bounded by $c\in F'$, it is therefore bounded by an element of $F$. Consequently $\mathcal O_{F'}\cap K=\mathcal O_F$. Applying the same observation to the reciprocals of nonzero elements gives $\mathfrak m_{F'}\cap K=\mathfrak m_F$. Thus the restricted place and the canonical place on $K$ have the same valuation ring and maximal ideal, which is precisely equivalence of places.
>
> **Step 2: algebraicity of the new residue field.** Put $k_0=\mathcal O_F/\mathfrak m_F$ and $k_1=\mathcal O_{F'}/\mathfrak m_{F'}$. The restriction just proved embeds $k_0$ into $k_1$. Because $K'/K$ is algebraic, $k_1/k_0$ is algebraic. Here is the valuation argument: if $x\in\mathcal O_{F'}$ is algebraic over $K$, take a nonzero relation $\sum_{i=0}^n a_ix^i=0$ with $a_i\in K$ and divide by a coefficient of smallest valuation among the nonzero $a_i$. All resulting coefficients lie in $\mathcal O_F$, at least one is a unit, and reduction modulo $\mathfrak m_{F'}$ gives a nonzero polynomial over $k_0$ annihilating the residue of $x$.
>
> Exercise 6 establishes that $k_0/F$ is algebraic because $F$ is maximal archimedean in $K$. Hence $k_1/F$ is algebraic. Since $F'\subseteq\mathcal O_{F'}$ and no nonzero element of $F'$ lies in $\mathfrak m_{F'}$, we also regard $F'$ as a subfield of $k_1$; therefore $k_1/F'$ is algebraic.
>
> **Step 3: identify the residue field.** Proposition 1.1 of this chapter says that a canonical residue field of an ordered field is real. Thus $k_1$ is a real algebraic extension of the real closed field $F'$, so $k_1=F'$ by the definition of real closedness. The canonical place on $K'$ consequently has finite values in $F'$ (and the value $\infty$ at its poles), as required.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

- **Source and proof status:** The exercise is printed at [S2, Ch. XI, Exercise 7, printed p. 462, PDF p. 477]. The derivation above is independent. It uses Lang's proved root bound (Lemma 2.6, printed p. 453 / PDF p. 468), the proved reality of canonical residue fields (Proposition 1.1, printed p. 451 / PDF p. 466), and the preceding Exercise 6, whose residue-algebraicity argument is an independent exercise result.
- **Place convention:** Equivalent places have the same valuation ring and maximal ideal; their residue fields may be identified by the induced isomorphism. The assertion that $\varphi(K')$ is $F'$-valued concerns finite values, with poles sent to $\infty$.
