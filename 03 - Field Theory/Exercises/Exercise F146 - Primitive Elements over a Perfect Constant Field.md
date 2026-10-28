---
title: "Exercise F146: Primitive Elements over a Perfect Constant Field"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.2, Exercise 8.2.3, printed p. 326, PDF p. 339"
source_refs:
  - "S7/ch-8/sec-2/ex-3"
created: 2026-10-28
---

# Exercise F146: Primitive Elements over a Perfect Constant Field

## Problem Statement

> [!question] Original Exercise 8.2.3
> Let $L/k(t)$ be finite, where $t$ is a variable and $k$ is perfect. Supply details in this sketch that the extension is primitive. The Steinitz Criterion says that a finite extension is primitive if and only if it has finitely many intermediate fields. Thus replace $L$ by its normal closure and assume it normal. Its maximal separable subextension is $k(t)\subset K_1\subset L$, with $L/K_1$ purely inseparable. Also let $K_2=L^{\operatorname{Aut}(L/k(t))}$; then $K_2/k(t)$ is the maximal purely inseparable subextension and $L/K_2$ is separable. These decompositions give $L=K_1K_2$. Write $K_1=k(t)(a)$ by the separable primitive-element theorem and $K_2=k(t)(b)$, $b^q=t$, $q=p^e$, since $k$ is perfect. The source argues that $a+b$ has the same number of conjugates as $a$, this equals the separable degree of $k(t)(a+b)/k(t)$, and hence $k(t)(a+b)$ contains $k(t)(a)$. Conclude $k(t)(a+b)=L$.

> [!warning] Source issue
> The last containment in the printed sketch does not follow merely from counting conjugates. The calculation $a^q=(a+b)^q-t$ and the equality $F(a)=F(a^q)$ give the missing justification. The characteristic-zero case uses the separable primitive-element theorem directly.

## Hints

> [!hint]- Hint 1
> Separable and purely inseparable extensions are linearly disjoint. Use the automorphism fixed field to compare their degrees.

> [!hint]- Hint 2
> Instead of relying only on the number of conjugates, compute $(a+b)^q=a^q+t$ and show $F(a)=F(a^q)$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Set $F=k(t)$. If the characteristic is zero, every finite extension is separable, and the separable primitive-element theorem finishes the proof. Suppose it is $p>0$. A finite normal closure exists by adjoining every root of finitely many defining polynomials. If this normal closure has only finitely many intermediate fields, so does the original extension; the Steinitz Criterion therefore permits the reduction.
>
> Let $G=\operatorname{Aut}(L/F)$. The maximal separable subfield $K_1/F$ is normal and separable. Every $F$-embedding of $K_1$ extends to the algebraic closure and preserves $L$ by normality. Restriction $G\to\operatorname{Gal}(K_1/F)$ is therefore onto and is injective because $L/K_1$ is purely inseparable. Thus $|G|=[K_1:F]$. The fixed-field theorem gives $L/K_2$ Galois of degree $|G|$. For $z\in K_2$, some $z^{p^d}$ is separable over $F$; it lies in $K_1$ and is fixed by all of its Galois group, so lies in $F$. Hence $K_2/F$ is purely inseparable. Conversely every purely inseparable element is fixed by $G$, proving maximality. Separable and purely inseparable extensions are linearly disjoint, so
> $$
> [K_1K_2:K_2]=[K_1:F]=|G|=[L:K_2],
> $$
> and $L=K_1K_2$.
>
> Here is why $K_2$ has the asserted form. It has finite purely inseparable exponent; choose the largest minimal exponent $e$ of one of its elements. Every element then lies in $F^{1/p^e}$. Perfectness of $k$ identifies $F^{1/p^e}=k(t^{1/p^e})$, of degree $p^e$ over $F$: taking roots of numerator and denominator coefficients proves the equality, and $T^{p^e}-t$ is irreducible by the valuation of $t$ at $t=0$. An element with minimal exponent $e$ has degree $p^e$, so its field already equals $F^{1/p^e}$. Therefore $K_2=F(b)$ with $b^{p^e}=t$.
>
> Take $K_1=F(a)$ and $c=a+b$. Then $c^q=a^q+t$, so $a^q=c^q-t\in F(c)$. The extension $F(a)/F(a^q)$ is purely inseparable, while it is also separable because $a$ is separable over $F$. It must be trivial. Consequently $a\in F(a^q)\subset F(c)$ and then $b=c-a\in F(c)$. This proves $F(c)=L$. It also handles $e=0$ (where $b=t$) and supplies the essential containment omitted in the sketch.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 326 / PDF p. 339. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
