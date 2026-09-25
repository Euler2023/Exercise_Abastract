---
title: Real Places and Archimedean Valuation Rings
aliases:
  - Canonical Place of an Ordered Field
  - Maximal Archimedean Subfields
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
  - real-places
  - valuation-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, §1, printed pp. 450–451, PDF pp. 465–466; Ch. XI, Exercises 5–12, printed pp. 462–463, PDF pp. 477–478"
source_status: verified
status: not-started
created: 2026-09-25
---

# Real Places and Archimedean Valuation Rings

## Definition

> [!info] Relative Archimedean property
> Let $K$ be an ordered field and $F\subseteq K$ an ordered subfield. An element $x\in K$ is **infinitely large over $F$** if $|x|>a$ for every $a\in F_{>0}$, and **infinitesimal over $F$** if $|x|<a$ for every $a\in F_{>0}$. The extension $K/F$ is **Archimedean** when it has no infinitely large element. The subfield $F$ is **maximal Archimedean in $K$** if no proper intermediate field $F\subsetneq E\subseteq K$ is Archimedean over $F$.

> [!info] Canonical valuation ring and place
> The ordering of $K/F$ determines
> $$
> \mathcal O_F=\{x\in K: |x|\leq a\text{ for some }a\in F_{>0}\},\qquad
> \mathfrak m_F=\{x\in K: |x|<a\text{ for every }a\in F_{>0}\}.
> $$
> The ring $\mathcal O_F$ is a valuation ring, $\mathfrak m_F$ is its unique maximal ideal, and reduction gives the **canonical place** $\mathcal O_F\to\kappa_F:=\mathcal O_F/\mathfrak m_F$. As a place on all of $K$, elements outside $\mathcal O_F$ are assigned $\infty$. A **real place** has an ordered real residue field, possibly embedded in a larger real field.

## Intuition

The ring $\mathcal O_F$ consists of elements bounded by a constant from $F$; its maximal ideal forgets infinitesimals. Reduction retains the finite “standard part” when that description is available. In contrast, a pole is sent to $\infty$. These algebraic places are maps obtained from valuation rings. The phrase “real place” here concerns the residue field and is distinct from the archimedean real embedding terminology used for number fields.

## Key Properties

1. **Why this is a valuation ring.** For $x\in K^\times$, if $x\notin\mathcal O_F$, then $|x|>a$ for every $a\in F_{>0}$, so $|x^{-1}|<a^{-1}$ for every positive $a\in F$; hence $x^{-1}\in\mathfrak m_F\subset\mathcal O_F$. An element of $\mathcal O_F\setminus\mathfrak m_F$ has inverse in $\mathcal O_F$, proving that $\mathfrak m_F$ is its unique maximal ideal.
2. **Real residue field.** The residue field $\kappa_F$ is real (Lang, Proposition 1.1, printed p. 451, PDF p. 466). If $-1$ were a sum of squares in $\kappa_F$, lifts would give $-1=\sum x_i^2+\epsilon$ with $x_i\in\mathcal O_F$ and infinitesimal $\epsilon$, impossible in the given ordering.
3. **Maximality and algebraic residue.** If $F$ is maximal Archimedean in $K$, the residue field $\kappa_F$ is algebraic over $F$: a residue class transcendental over $F$ would have a lift $x$ for which every element of $F(x)$ is bounded, contradicting maximality. This is independently proved in [[03 - Field Theory/Exercises/Exercise F100 - Residue Field of a Maximal Archimedean Subfield|Exercise F100]].
4. **Equivalence of places.** Two field-valued places on $K$ are equivalent when they have the same valuation ring and their residue-field maps differ only by an isomorphism of residue fields. A place over $F$ fixes $F$ wherever defined. Requiring only an algebraic target over $F$ does not force a place to be canonical; a real residue-field condition matters in [[03 - Field Theory/Exercises/Exercise F102 - A Missing Reality Hypothesis for Canonical Places|Exercise F102]].

## Examples

> [!example] A variable infinitely large over $\mathbb R$
> Order $K=\mathbb R(t)$ by the sign of the leading coefficient of a rational function at $t=+\infty$, so $t>a$ for every $a\in\mathbb R$. Then $\mathcal O_{\mathbb R}$ consists of rational functions bounded at infinity, $\mathfrak m_{\mathbb R}$ consists of those tending to zero there, and $\kappa_{\mathbb R}\cong\mathbb R$. The canonical place sends $t$ to $\infty$ and $t^{-1}$ to $0$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Lang defines relative Archimedean behavior and constructs the valuation ring in Chapter XI §1 [S2, printed p. 450, PDF p. 465]; Proposition 1.1 proves its residue field is real [printed p. 451, PDF p. 466]. Exercises 5–12 pose the subsequent real-place assertions; their shared preamble says solutions are in the external paper [La 53], so the book does not itself supply those exercise proofs.
- The valuation-ring calculation, terminology distinction, example, and explicit warning about an algebraic target are explanations supplied here. The linked exercise notes carry independent derivations and the precise source-issue boundary.
