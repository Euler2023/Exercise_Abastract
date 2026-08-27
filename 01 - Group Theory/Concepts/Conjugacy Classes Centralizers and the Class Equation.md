---
title: Conjugacy Classes Centralizers and the Class Equation
aliases:
  - Conjugacy Classes
  - Centralizers
  - Class Equation
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - conjugacy-classes
  - centralizers
  - class-equation
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, printed pp. 195–197, PDF pp. 207–209"
source_status: verified
status: not-started
---

# Conjugacy Classes, Centralizers, and the Class Equation

## Definition

> [!info] Conjugation
> A group $G$ acts on itself by conjugation:
>
> $$
> g*x=gxg^{-1}.
> $$

> [!info] Centralizer and conjugacy class
> The stabilizer and orbit of $x$ under conjugation are respectively
>
> $$
> Z_G(x)=\{g\in G:gx=xg\},\qquad
> C(x)=\{gxg^{-1}:g\in G\}.
> $$

Artin writes the centralizer as $Z(x)$. The subscripted notation distinguishes it from the center

$$
Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}.
$$

## Intuition

Conjugation is change of coordinates internal to a group. A conjugacy class collects objects that become one another after such a change. The centralizer measures the symmetries that leave one object unchanged. Large centralizer means small conjugacy class, and conversely.

## Orbit–Stabilizer Formula

For finite $G$,

$$
|G|=|Z_G(x)|\,|C(x)|,
\qquad
|C(x)|=[G:Z_G(x)].
$$

Important inclusions are

$$
Z(G)\le Z_G(x),\qquad \langle x\rangle\le Z_G(x).
$$

Thus every class size divides $|G|$, and central elements are exactly those with singleton classes.

## The Class Equation

Conjugacy classes partition a finite group, giving

$$
|G|=\sum_C |C|
=|Z(G)|+\sum_{x\notin Z(G)}[G:Z_G(x)],
$$

where the second sum uses one representative from each noncentral class.

## Key Properties

1. A normal subgroup is a union of conjugacy classes containing the identity.
2. A homomorphism sends conjugates to conjugates; a surjective homomorphism maps each conjugacy class onto the class of its image.
3. The power map $x\mapsto x^n$ maps $C(x)$ onto $C(x^n)$.
4. Conjugate elements have the same order and the same values under every conjugacy-invariant quantity.
5. In a matrix group, conjugacy is matrix similarity and centralizers are found from $PA=AP$.

## Examples

> [!example] $S_3$
> The identity, the two $3$-cycles, and the three transpositions are the three conjugacy classes:
>
> $$
> 6=1+2+3.
> $$

> [!example] $D_5$
> The class equation is $10=1+2+2+5$: two inverse pairs of rotations and one class of five reflections.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions, orbit–stabilizer formula, center criterion, and class equation are proved or derived in Artin §7.2. [S1, Ch. 7, formulas (7.2.1)–(7.2.8), printed pp. 195–197, PDF pp. 207–209] The linked exercise solutions are independent applications rather than solutions printed in the source.
