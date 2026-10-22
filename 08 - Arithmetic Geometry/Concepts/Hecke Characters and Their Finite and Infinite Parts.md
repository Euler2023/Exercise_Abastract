---
title: Hecke Characters and Their Finite and Infinite Parts
aliases:
  - Hecke Characters
  - Grossencharacters
  - Grössencharaktere
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, (6.1)–(6.2), printed pp. 470–472, PDF pp. 489–491"
source_status: verified-bounded
---

# Hecke Characters and Their Finite and Infinite Parts

## Definition

> [!info] Hecke character
> A unitary Hecke character is a continuous character of the idele class group $C_K=I_K/K^*$ into $S^1$. In ideal notation, a character $\chi:J^{\mathfrak m}\to S^1$ is a Grössencharakter modulo $\mathfrak m$ when on principal ideals prime to the modulus it has a finite part $\chi_f$ and an archimedean part $\chi_\infty$ with $\chi((a))=\chi_f(a)\chi_\infty(a)$.

## Intuition

Dirichlet characters detect congruences. Hecke characters also detect the archimedean sizes and arguments of algebraic numbers, while remaining trivial on the diagonal global field in the idele-class formulation.

## Key Properties

- The principal-ideal formula must be independent of the generator; equivalently $\chi_f(u)\chi_\infty(u)=1$ for every global unit $u$.
- The conductor is the smallest modulus through which the finite local conditions factor. Changing an imprimitive modulus adds or removes the corresponding Euler factors.
- Infinity types involve sign exponents at real places, integral angular exponents at complex places and continuous norm parameters. Unit relations impose phase congruences, including the roots of unity.
- A Hecke L-series sums $\chi(\mathfrak a)N\mathfrak a^{-s}$ over integral ideals prime to the modulus. Analytic continuation requires the additional analytic arguments, not only the definition of the character.

## Examples

For $K=\mathbb Q$, finite-order Hecke characters recover Dirichlet characters with their parity/sign compatibility. The unitary norm character $\mathfrak N^{it}$, $t\in\mathbb R$, gives a continuous archimedean parameter. Ideal-number extensions used in the theta-series exercises form multiplicative systems; their full union is not a ring closed under addition.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, (6.1)–(6.2), printed pp. 470–472, PDF pp. 489–491. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.
