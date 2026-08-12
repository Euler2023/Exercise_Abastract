---
title: "Exercise Rep11: Galois Action and the Regular Character"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory, galois-theory, characters]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.13, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise Rep11: Galois Action and the Regular Character

## Problem Statement

> [!question] Exercise M.13
> Let $K/F$ be Galois with group $G$. Viewing $K$ as an $F$-vector space gives a representation of $G$. If $F$ contains enough roots of unity, prove its character is the regular character.

## Hints

> [!hint]- Hint 1
> Use a normal basis, or diagonalize each finite-order automorphism and compute its trace.

## Solution

> [!success]- Solution
> By the normal basis theorem there is $\alpha\in K$ such that $\{g(\alpha):g\in G\}$ is an $F$-basis of $K$. Relative to this basis, $h\in G$ acts by
> $$
> h:g(\alpha)\longmapsto(hg)(\alpha),
> $$
> which is exactly left translation on the basis indexed by $G$. Thus the representation is isomorphic to the regular representation. Its character is
> $$
> \chi(1)=|G|,\qquad \chi(h)=0\quad(h\ne1).
> $$
> The normal-basis argument actually shows the claim without the roots-of-unity hypothesis; that assumption enables the alternative eigenvalue proof and the familiar splitting-field interpretation of characters.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

The normal basis theorem is an external standard input and is not proved in this note. The printed roots-of-unity assumption is stronger than necessary.
