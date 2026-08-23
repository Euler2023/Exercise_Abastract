---
title: "Exercise LA67: Path Components in Euclidean Space"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - topology
  - path-connectedness
  - euclidean-space
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.6, printed pp. 75–76, PDF pp. 87–88"
created: 2026-08-23
---

# Exercise LA67: Path Components in Euclidean Space

## Problem Statement

> [!question] Exercise M.6
> For points $a,b$ of $\mathbb R^k$, define $a\sim b$ in a subset $S\subseteq\mathbb R^k$ when a continuous path in $S$ joins $a$ to $b$.
> 
> **(a)** Show that $\sim$ is an equivalence relation on $S$.
> 
> **(b)** Show that $S$ is partitioned into path-connected subsets such that points in different subsets cannot be connected by a path in $S$.
> 
> **(c)** Which of the following loci in $\mathbb R^2$ are path-connected: $\{x^2+y^2=1\}$, $\{xy=0\}$, $\{xy=1\}$?

## Hints

> [!hint]- Hint 1
> Use constant paths, reversed paths, and concatenated paths.

> [!hint]- Hint 2
> For $xy=1$, inspect the sign of $x$ along a path.

## Solution

> [!success]- Solution
> **(a)** Reflexivity follows from the constant path. If $X$ joins $a$ to $b$, then $t\mapsto X(1-t)$ joins $b$ to $a$. If $X$ joins $a$ to $b$ and $Y$ joins $b$ to $c$, concatenate them by using $X(2t)$ for $0\le t\le1/2$ and $Y(2t-1)$ for $1/2\le t\le1$. Each constructed path stays in $S$.
> 
> **(b)** The equivalence classes from (a) are precisely the path components. Each class is path-connected, and a path joining two different classes would make their endpoints equivalent, a contradiction.
> 
> **(c)** The circle is path-connected, for example by circular arcs. The locus $xy=0$ is the union of the two coordinate axes; any point can be joined to the origin along its axis, so it is path-connected. The hyperbola $xy=1$ is not path-connected: its branches lie in $x>0$ and $x<0$, and a continuous path between them would have to pass through $x=0$. Each branch separately is path-connected.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.6, printed pp. 75–76, PDF pp. 87–88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
